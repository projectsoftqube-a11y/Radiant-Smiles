import { DoctorProfile } from "@/components/sections/doctor/DoctorProfile";
import { bhalalaPage } from "@/content/pages/doctors";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(bhalalaPage.meta);

export default function BhalalaPage() {
  return <DoctorProfile page={bhalalaPage} />;
}
