import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

export const HostCard = () => {
  return (
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
  );
};
