"use client";
import { Input } from "@/components/ui/input";
import queryString from "query-string";
import { Search } from "lucide-react";
import { useDebounceValue } from "usehooks-ts"; // Assuming you're using useDebounceValue
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState("");  // Ensure value is a string
  const debouncedValue = useDebounceValue(value, 500);  // debouncedValue will be a string after 300ms
console.log(">>>>>" , debouncedValue[0]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  useEffect(() => {
  
    const url = queryString.stringifyUrl(
      {
        url: "/", // Your desired URL path
        query: {
          search : debouncedValue[0]
        },
      },
      {
        skipEmptyString: true,
        skipNull: true,
      }
    );

    router.push(url);
  }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search
        className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4"
      />
      <Input
         className="w-full max-w-[516px] pl-9"
        placeholder="Search Boards"
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default SearchInput;
