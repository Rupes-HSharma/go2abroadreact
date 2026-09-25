"use client";
import type { NavigationNode } from "@go2abroad/page-builder";
import { Button } from "../ui/button";
import { SortableList } from "./SortableList";
const newNode = (): NavigationNode => ({
  id: crypto.randomUUID(),
  label: "New link",
  url: "/",
  isVisible: true,
  children: [],
});
const height = (node: NavigationNode): number =>
  node.children.length ? 1 + Math.max(...node.children.map(height)) : 0;
export function NavigationEditor({
  items,
  onChange,
  depth = 0,
  onPromote,
}: {
  items: NavigationNode[];
  onChange: (items: NavigationNode[]) => void;
  depth?: number;
  onPromote?: (node: NavigationNode) => void;
}) {
  const update = (index: number, patch: Partial<NavigationNode>) =>
    onChange(
      items.map((item, i) => (i === index ? { ...item, ...patch } : item)),
    );
  return (
    <div className="space-y-2">
      <SortableList items={items} id={(item) => item.id} onChange={onChange}>
        {(item, index) => (
          <details className="mb-2 rounded border p-2">
            <summary className="cursor-pointer text-sm">
              {item.label}
              {!item.isVisible && " (hidden)"}
            </summary>
            <label className="mt-2 text-xs">
              Link label
              <input
                value={item.label}
                onChange={(e) => update(index, { label: e.target.value })}
              />
            </label>
            <label className="text-xs">
              Link URL
              <input
                value={item.url}
                onChange={(e) => update(index, { url: e.target.value })}
              />
            </label>
            <label className="flex items-center gap-2 text-xs">
              <input
                type="checkbox"
                className="h-4 w-4"
                checked={item.isVisible}
                onChange={(e) => update(index, { isVisible: e.target.checked })}
              />
              Visible
            </label>
            <div className="flex flex-wrap gap-1">
              <Button
                size="sm"
                variant="destructive"
                onClick={() => onChange(items.filter((_, i) => i !== index))}
              >
                Delete link
              </Button>
              {index > 0 &&
                depth + height(item) < 2 &&
                items[index - 1].children.length < 20 && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      onChange(
                        items
                          .filter((_, i) => i !== index)
                          .map((node, i) =>
                            i === index - 1
                              ? { ...node, children: [...node.children, item] }
                              : node,
                          ),
                      )
                    }
                  >
                    Nest under previous
                  </Button>
                )}
              {onPromote && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => onPromote(item)}
                >
                  Move up a level
                </Button>
              )}
            </div>
            {depth < 2 && (
              <div className="mt-3 border-l pl-2">
                <NavigationEditor
                  items={item.children}
                  depth={depth + 1}
                  onChange={(children) => update(index, { children })}
                  onPromote={
                    items.length < 20
                      ? (child) =>
                          onChange([
                            ...items.slice(0, index),
                            {
                              ...item,
                              children: item.children.filter(
                                (node) => node.id !== child.id,
                              ),
                            },
                            child,
                            ...items.slice(index + 1),
                          ])
                      : undefined
                  }
                />
              </div>
            )}
          </details>
        )}
      </SortableList>
      <Button
        size="sm"
        variant="outline"
        disabled={items.length >= 20}
        onClick={() => onChange([...items, newNode()])}
      >
        {depth ? "Add nested link" : "Add navigation link"}
      </Button>
    </div>
  );
}
