import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Baby, MessageSquare, Users } from "lucide-react";

export const ContactForm = () => {
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
        <form className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nom complet
              </label>
              <Input placeholder="Votre nom" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <Input type="email" placeholder="votre@email.com" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <Input type="tel" placeholder="+33 6 XX XX XX XX" />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-1" />
                Nombre d&apos;adultes
              </label>
              <Input type="number" placeholder="2" min="1" max="10" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Baby className="w-4 h-4 inline mr-1" />
                Nombre d&apos;enfants
              </label>
              <Input type="number" placeholder="0" min="0" max="10" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <Textarea
              placeholder="Parlez-nous de votre projet de séjour : dates souhaitées, nombre de personnes, questions particulières..."
              className="min-h-[120px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full text-white font-medium py-3 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Envoyer ma demande
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
