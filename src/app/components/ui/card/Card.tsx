import * as React from "react";
import { Slot } from "@radix-ui/react-slot";

import { cn } from "@/app/components/ui/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, ...props }, ref) => {
        return (
            <div
                ref={ref}
                data-slot="card"
                className={cn(
                    "bg-card text-card-foreground flex flex-col gap-6 rounded-xl border",
                    className,
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

type CardHeaderProps = React.HTMLAttributes<HTMLDivElement>;

const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-slot="card-header"
            className={cn(
                "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
                className,
            )}
            {...props}
        />
    );
});
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    asChild?: boolean;
}

const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
    ({ className, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "h4";
        return (
            <Comp
                ref={ref}
                data-slot="card-title"
                className={cn("leading-none", className)}
                {...props}
            />
        );
    });
CardTitle.displayName = "CardTitle";

type CardDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;

const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(({ className, ...props }, ref) => {
    return (
        <p
            ref={ref}
            data-slot="card-description"
            className={cn("text-muted-foreground", className)}
            {...props}
        />
    );
});
CardDescription.displayName = "CardDescription";

type CardActionProps = React.HTMLAttributes<HTMLDivElement>;

const CardAction = React.forwardRef<HTMLDivElement, CardActionProps>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-slot="card-action"
            className={cn(
                "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
                className,
            )}
            {...props}
        />
    );
});
CardAction.displayName = "CardAction";

type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-slot="card-content"
            className={cn("px-6 [&:last-child]:pb-6", className)}
            {...props}
        />
    );
});
CardContent.displayName = "CardContent";

type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;

const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(({ className, ...props }, ref) => {
    return (
        <div
            ref={ref}
            data-slot="card-footer"
            className={cn("flex items-center px-6 pb-6 [.border-t]:pt-6", className)}
            {...props}
        />
    );
});
CardFooter.displayName = "CardFooter";

export {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardAction,
    CardDescription,
    CardContent,
};