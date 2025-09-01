export type ButtonType = {
  label: string;
  variant: keyof typeof classVariant;
};

const classVariant = {
  defolt: ' border-none  text-white bg-gradient-to-r from-orange-600 to-orange-400 ',
  primary: 'border-none   text-white ',
  secondary:'w-[150px] h-[40px] bg-gradient-to-r from-orange-600 to-orange-400 text-white',
  thirdly:'w-[150px] h-[40px]',
};

export default function Button({ label, variant }: ButtonType) {
  return <button className={`${classVariant[variant]} py-1 cursor-pointer px-4 rounded-[12px]`}>{label}</button>;
}
