export type ButtonType = {
  label: string;
  variant: keyof typeof classVariant;
};

const classVariant = {
  defolt: 'py-1 px-4 border-none  text-white bg-gradient-to-r from-orange-600 to-orange-400 ',
  primary: 'py-1 px-4 border-none   text-white ',
  secondary:'h-[38px] px-[20px] bg-gradient-to-r from-orange-600 to-orange-400 text-white',
  thirdly:' h-[40px]',
};

export default function Button({ label, variant }: ButtonType) {
  return <button className={`${classVariant[variant]} font-family-poppins  cursor-pointer  rounded-[12px]`}>{label}</button>;
}
