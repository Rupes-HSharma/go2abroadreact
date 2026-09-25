import { Injectable } from "@nestjs/common";
import { mkdir, unlink, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

export const MEDIA_DIRECTORY = process.env.MEDIA_DIRECTORY
  ? resolve(process.env.MEDIA_DIRECTORY)
  : resolve(__dirname, "../../uploads/cms");

export abstract class FileStorage {
  abstract write(key: string, buffer: Buffer): Promise<void>;
  abstract delete(key: string): Promise<void>;
}

@Injectable()
export class LocalFileStorage implements FileStorage {
  async write(key: string, buffer: Buffer) {
    await mkdir(MEDIA_DIRECTORY, { recursive: true });
    await writeFile(join(MEDIA_DIRECTORY, key), buffer, { flag: "wx" });
  }
  async delete(key: string) {
    await unlink(join(MEDIA_DIRECTORY, key)).catch(
      (e: NodeJS.ErrnoException) => {
        if (e.code !== "ENOENT") throw e;
      },
    );
  }
}
