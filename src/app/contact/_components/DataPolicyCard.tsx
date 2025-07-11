import { Card, CardContent } from "@/components/ui/card";
import { Shield } from "lucide-react";

export const DataPolicyCard = () => {
  return (
    <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-white">
      <CardContent>
        <div className="flex items-start gap-3">
          <Shield className="w-6 h-6 text-blue-500" />
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">
              Confidentialité
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Vos données sont utilisées exclusivement pour la prise de contact.
              Aucun stockage permanent, aucune revente.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
