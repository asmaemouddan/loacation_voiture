import { Camera, Mail, Phone, MapPin } from "lucide-react";

function ProfileCard() {
  return (
    <div className="w-full xl:w-[360px]">
      <div className="rounded-[2.5rem] border border-black/10 bg-black/[0.03] p-8 backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.04]">
        <div className="relative mx-auto w-fit">
          <img
            src="/images/profile/admin.jpg"
            alt="profile"
            className="h-40 w-40 rounded-full object-cover ring-4 ring-[#081C15]/20 dark:ring-[#22C55E]/20"
          />

          <button className="absolute bottom-2 right-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#081C15] text-white dark:bg-[#22C55E] dark:text-[#081C15]">
            <Camera size={20} />
          </button>
        </div>

        <div className="mt-6 text-center">
          <h1 className="text-3xl font-black">Asmae El Amrani</h1>
        
        </div>

        <div className="mt-8 space-y-4">
          <Info icon={<Mail size={18} />} text="asmae@gmail.com" />
          <Info icon={<Phone size={18} />} text="+212 6 12 34 56 78" />
          <Info icon={<MapPin size={18} />} text="Fès, Maroc" />
        </div>
      </div>
    </div>
  );
}

function Info({ icon, text }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-black/10 bg-white px-5 py-4 text-sm text-[#081C15]/65 dark:border-white/10 dark:bg-black/20 dark:text-white/65">
      <span className="text-[#081C15] dark:text-[#22C55E]">{icon}</span>
      {text}
    </div>
  );
}

export default ProfileCard;