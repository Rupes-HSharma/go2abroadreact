import { Controller, Get } from "@nestjs/common";

@Controller()
export class AppController {
  @Get()
  getInfo(): { name: string; status: string; health: string } {
    return {
      name: "Go2Abroad API",
      status: "online",
      health: "/health",
    };
  }
}
