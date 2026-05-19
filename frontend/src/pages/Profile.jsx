import ProfileCard from "../components/profile/ProfileCard";
import OCRVerification from "../components/profile/OCRVerification";
import ProfileForm from "../components/profile/ProfileForm";
import ProfileScanOCR from "../components/profile/ProfileScanOCR";
function Profile() {
  return (
    <main className="min-h-screen bg-white px-6 py-10 text-[#081C15] transition-colors duration-500 dark:bg-[#070b0a] dark:text-white lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 xl:flex-row">
          <ProfileCard />

          <div className="flex-1 space-y-8">
            <ProfileScanOCR />
            <OCRVerification />
            <ProfileForm />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;