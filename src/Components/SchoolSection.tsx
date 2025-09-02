import SchoolCard from './SchoolCard';

export default function SchoolSection() {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] to-[#CFDCEA] py-[40px] px-[80px] max-sm:px-[20px]">
      <h1 className="font-bold text-[30px] text-[#282C34] font-family-playfair">Featured Schools</h1>
      <p className="text-[#6B7280] text-[16px] py-1 mb-5 font-family-poppins">
        Discover quality education opportunities across Rwanda
      </p>

      <div className="grid grid-cols-3 gap-3 max-sm:grid-cols-1">
        <SchoolCard
          title="Rwanda Excellence School"
          rating={4.6}
          location="Kigali , Kicukiro District"
          seats={12}
          category="Secondary"
          images="R"
        />
        <SchoolCard
          title="Green Hills Primary School"
          rating={4.7}
          location="Kigali , Gasabo District"
          seats={35}
          
          category="Primary"
          images="G"
        />

        <SchoolCard
          title="Hillside International School"
          rating={4.9}
          location="Northen Province , Musanze District"
          seats={18}
          
          category="Primary & Secondary"
          images="H"
        />

        <SchoolCard
          title="Unity Secondary School"
          rating={4.5}
          location="Southern Province , Huye District"
          seats={8}
         
          category="Primary & Secondary"
          images="U"
        />
        <SchoolCard
          title="Future Leaders Academy"
          rating={4.4}
          location="Western Province , Rubavu District"
          seats={42}
         
          category="Primary & Secondary"
          images="F"
        />
        <SchoolCard
          images="K"
          title="Kigali international Academy"
          category="primary and secondary "
          location="Kigali , Gasabo District"
          seats={25}
        
          rating={4.6}
        />
      </div>
    </div>
  );
}
