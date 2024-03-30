"use client";

import * as z from "zod";
import { Heading } from "./heading";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface GridInputProps {
  imageUrl: string;
  label: string;
}

const formSchema = z.object({
  xCord: z.string(),
  yCord: z.string(),
});

export const GridInput = ({ imageUrl, label }: GridInputProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      xCord: "",
      yCord: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
    form.reset();
  };

  return (
    <div className="w-full px-6 py-4 space-y-4">
      <Heading imageUrl={imageUrl} label={label} />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="flex items-center justify-between gap-x-4">
            <FormField
              control={form.control}
              name="xCord"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>X-Cordinate</FormLabel>
                  <FormControl>
                    <Input placeholder="enter cordinate" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="yCord"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Y-Cordinate</FormLabel>
                  <FormControl>
                    <Input placeholder="enter cordinate" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" className="w-full" variant="outline">
            Add +
          </Button>
        </form>
      </Form>
    </div>
  );
};
