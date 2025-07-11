import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Baby, Mail, MessageSquare, Phone, Shield, Users } from "lucide-react";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Nous Contacter
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nous sommes à votre disposition pour répondre à toutes vos questions
          et vous aider à planifier votre séjour.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
            <CardHeader>
              <CardTitle className="text-xl text-gray-900">Vos hôtes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    Dorothée et Hervé
                  </h3>
                  <p className="text-gray-600">
                    Propriétaires de la Villa Morticcione
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <a
                      href="mailto:cavaliedorothee@free.fr"
                      className="text-primary hover:text-[#677966] font-medium transition-colors"
                    >
                      cavaliedorothee@free.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">SMS ou WhatsApp</p>
                    <a
                      href="tel:+33618776883"
                      className="text-secondary hover:text-[#665466] font-medium transition-colors"
                    >
                      +33 (0)6 18 77 68 83
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
            <CardContent>
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-blue-500" />
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Confidentialité
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Vos données sont utilisées exclusivement pour la prise de
                    contact. Aucun stockage permanent, aucune revente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

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
      </div>
    </div>
  );
}
