import * as React from "react";

import { cn } from "@/lib/utils";

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    (<textarea
      className={cn(
        "flex h-[200px] border rounded-md border-white/10 focus:border-accent font-light bg-primary px-6 py-4 text-base placeholder:text-white/60 outline-none",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Textarea.displayName = "Textarea"

export { Textarea };

