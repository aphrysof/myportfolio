'use client'

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";



const formSchema = z.object({
    name: z.string().min(2, {message: "Full name is required"}),
    subject: z.string().min(2, {message: "Subject Required"}),
    email: z.string().email({ message: "Invalid email address"}),
    message: z.string().min(2,{message: "Message Required"}),

});

const Contact = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      subject: "",
      email: "",
      message: ""


    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <section className="px-5 py-12 md:px-16 lg:py-[96px] lg:px-[124px] bg-[#111927]" id="contact">
      <h2 className="text-center text-2xl md:text-3xl text-white font-bold">Contact Me</h2>
      <div className="w-full md:w-[50%] mx-auto">
      <Form {...form}>
      <div className="flex-center flex-col">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full mt-5"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    placeholder="Enter your full name"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email *</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    className="shad-input"
                    placeholder="Enter your email address"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
                    <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject *</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    className="shad-input"
                    placeholder="Subject"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message *</FormLabel>
                <FormControl>
                  <Textarea
                    className="shad-textarea"
                    placeholder="Message"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" className="bg-purple-500">
            {/* {isLoading ? (
              <div className="flex-center gap-2">
                <Loader /> Loading ....
              </div>
            ) : (
              "Sign Up"
            )} */}
            Send Message
          </Button>
        </form>
      </div>
    </Form>
      </div>
    </section>
  );
};

export default Contact;
