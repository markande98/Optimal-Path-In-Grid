"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { grid } from "@/store/atoms/grid";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import * as z from "zod";
import { Heading } from "./heading";
import { useRouter } from "next/navigation";
import { isValidCordinates } from "@/lib/check";
import { toast } from "sonner";

interface GridInputProps {
  imageUrl: string;
  label: string;
  hasWeight?: boolean;
}

const formSchema = z.object({
  xCord: z.string(),
  yCord: z.string(),
  weight: z.string().optional(),
});

export const GridInput = ({ imageUrl, label, hasWeight }: GridInputProps) => {
  const setCoordinates = useSetRecoilState(grid);
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      xCord: "",
      yCord: "",
      weight: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    const { xCord, yCord, weight } = values;
    const isValid = isValidCordinates(xCord, yCord, weight);

    if (!isValid) {
      toast.error("Invalid coordinates!, please enter again");
      return;
    }
    const xVal = parseInt(xCord);
    const yVal = parseInt(yCord);
    let wVal = 0;

    if (weight) wVal = parseInt(weight);

    const gridValue = xVal * 6 + yVal;
    hasWeight
      ? setCoordinates((cord) => cord.set(gridValue, wVal))
      : setCoordinates((cord) => cord.set(gridValue, -1));
    router.refresh();
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
                    <Input placeholder="0-based" {...field} />
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
                    <Input placeholder="0-based" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            {hasWeight && (
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Weight</FormLabel>
                    <FormControl>
                      <Input placeholder="value" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}
          </div>
          <Button type="submit" className="w-full" variant="outline">
            Add +
          </Button>
        </form>
      </Form>
    </div>
  );
};
