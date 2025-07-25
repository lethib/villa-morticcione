"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Baby, MessageSquare, Users } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";

type FormStatus = "idle" | "success" | "error";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<FormStatus>("idle");

  useEffect(() => {
    emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY });
  }, []);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    if (
      !form.current ||
      !(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID &&
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      )
    )
      return;
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current
      )
      .then(() => {
        setStatus("success");
        form.current?.reset();
      })
      .catch((error) => {
        setStatus("error");
        console.error("Email sending error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const ButtonStyleAndText: Record<
    FormStatus,
    { className: string; disabled: boolean; text: string }
  > = {
    idle: {
      className: "",
      disabled: false,
      text: "Envoyer ma demande",
    },
    success: {
      className: "bg-green-500 text-white hover:bg-green-600",
      disabled: true,
      text: "Demande envoyée !",
    },
    error: {
      className: "bg-red-500 text-white hover:bg-red-600",
      disabled: false,
      text: "Erreur lors de l'envoi",
    },
  };

  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
      <CardHeader className="pb-6">
        <CardTitle className="flex items-center gap-2 text-xl text-gray-900">
          <MessageSquare className="w-6 h-6 text-primary" />
          Parlez-nous de votre séjour
        </CardTitle>
        <p className="text-gray-600 text-sm">
          Quelques informations nous aideront à mieux vous renseigner
        </p>
      </CardHeader>
      <CardContent>
        <form ref={form} onSubmit={(e) => sendEmail(e)} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <Input name="name" placeholder="Votre nom" required />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input
                name="email"
                type="email"
                pattern="^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$"
                placeholder="votre@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <Input
              name="phone_number"
              type="tel"
              pattern="^(\+33|0)[1-9](\d{2}){4}$"
              placeholder="+33 6 XX XX XX XX"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                Nombre d&apos;adultes
              </label>
              <Input
                name="adult_count"
                type="number"
                placeholder="2"
                min="1"
                max="10"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Baby className="w-4 h-4 inline mr-1" />
                Nombre d&apos;enfants
              </label>
              <Input
                name="child_count"
                type="number"
                placeholder="0"
                min="0"
                max="10"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea
              name="message"
              placeholder="Parlez-nous de votre projet de séjour : dates souhaitées, nombre de personnes, questions particulières..."
              className="min-h-[120px]"
              required
            />
          </div>

          <Button
            type="submit"
            className={`w-full text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300 ${ButtonStyleAndText[status].className}`}
            loading={isLoading}
            loadingText="Envoi en cours..."
            disabled={isLoading || ButtonStyleAndText[status].disabled}
          >
            {ButtonStyleAndText[status].text}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
