import React from "react";

function page({ params }) {
  return (
    <div>
      {params.slug}
      {params.text}
      {params.another}
    </div>
  );
}

export async function generateStaticParams() {
  return [{ slug: "i_am_cool" }, { slug: "i_am_cool_too" }];
}

export default page;
