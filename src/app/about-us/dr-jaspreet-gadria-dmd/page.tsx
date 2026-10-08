import { DoctorProfile } from "@/components/sections/doctor/DoctorProfile";
import { gadriaPage } from "@/content/pages/doctors";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata(gadriaPage.meta);

export default function GadriaPage() {
  return <DoctorProfile page={gadriaPage} />;
}
