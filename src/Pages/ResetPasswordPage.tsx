import ContNav from '../Components/ContNav';
import Footer from '../Components/Footer';
import ResetPasswordForm from '../Components/forms/ResetPasswordForm';

export default function ResetPasswordPage() {
  return (
    <div>
        <div className="">
            <ContNav/>
        </div>

        <div className="">
            <ResetPasswordForm/>
        </div>

        <div>
            <Footer/>
        </div>
    </div>
  );
}
