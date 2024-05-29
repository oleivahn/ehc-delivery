import React from "react";
import { Protect } from "@clerk/nextjs";

const Pricing = () => {
  return (
    <>
      <div className="container mt-6">
        {/* TODO: I'm passing the wrong props to Protect */}
        <Protect
          // permission="org:user:create"
          // role="org:admin"
          fallback={
            <p>You do not have the permissions to create an invoice.</p>
          }
        >
          <p className="text-3xl">Pricing to protect!!!</p>
        </Protect>
      </div>
    </>
  );
};

export default Pricing;
