import TopSpinner from "@/apputils/TopSpinner";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useConfigRole } from "@/hooks/user/configRoleHooks";
import { roleDataTypes } from "@/types/apptypes/appDataTypes";
import { decodeString } from "@/utils/appUtils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function DashboardJoinAs() {
  const userName = localStorage.getItem("userName");
  const [accountType, setAccountType] = useState<roleDataTypes | undefined>();
  const { configRole, isPending } = useConfigRole();
  const navigate = useNavigate()

  function handleSelectAccoutnType(type: roleDataTypes) {
    setAccountType(accountType !== type ? type : undefined);
  }

  function handleConfigRoleType() {
    configRole(
      {
        userName: decodeString(userName as  never),
        role: accountType as never,
      },
      {
        onSuccess(data) {
          console.log(data);
          if(data?.data === "SUCCESS"){
            localStorage.setItem("isFirstTimeLogin",false as unknown as string);
            navigate("/fg/home")

          }
        },
      }
    );
  }

  return (
    <div className="w-full h-full items-center justify-center flex flex-col gap-6 p-8">
      {<TopSpinner isPending={isPending} />}
      <p className="text-3xl font-serif text-center">
        Join as a Client, Freelancer, Employee, or Employer
      </p>

      <RadioGroup className="flex flex-col gap-3 justify-center">
        {/* Client */}
        <div className="flex flex-row gap-3">
          <div
            onClick={() => {
              handleSelectAccoutnType("CLIENT");
            }}
            className={` ${
              accountType === "CLIENT"
                ? "border-2 border-constructive"
                : "border border-constructive/60"
            } p-4 lg:p-6 relative  rounded-xl  shadow-md  transition w-[45vw] lg:h-[15vh] lg:w-[15vw]  lg:hover:border-2 lg:hover:border-constructive cursor-pointer`}
          >
            <div className="absolute top-2 lg:top-4 lg:right-4 right-2">
              <RadioGroupItem
                circleClassName="fill-constructive"
                className="border-constructive w-5 h-5 "
                value="Client"
                id="client"
                checked={accountType === "CLIENT"}
              />
            </div>
            <p className="lg:text-xl font-semibold mb-2">I’m a Client</p>
            <p className="lg:text-sm text-muted-foreground">
              I want to post jobs and hire freelancers or employees for work.
            </p>
          </div>

          {/* Freelancer */}
          <div
            onClick={() => {
              handleSelectAccoutnType("FREELANCER");
            }}
            className={` ${
              accountType === "FREELANCER"
                ? "border-2 border-constructive"
                : "border border-constructive/60"
            } p-4 lg:p-6 relative  rounded-xl  shadow-md  transition w-[45vw] lg:h-[15vh] lg:w-[15vw]  lg:hover:border-2 lg:hover:border-constructive cursor-pointer`}
          >
            <div className="absolute top-2 lg:top-4 lg:right-4 right-2">
              <RadioGroupItem
                circleClassName="fill-constructive"
                className="border-constructive w-5 h-5 "
                value="Freelancer"
                id="freelancer"
                checked={accountType === "FREELANCER"}
              />
            </div>
            <p className="lg:text-xl font-semibold mb-2">I’m a Freelancer</p>
            <p className="lg:text-sm text-muted-foreground">
              I’m looking for freelance projects and opportunities to get paid.
            </p>
          </div>
        </div>

        <div className="flex flex-row gap-3">
          {/* Employee */}
          <div
            onClick={() => {
              handleSelectAccoutnType("EMPLOYEE");
            }}
            className={` ${
              accountType === "EMPLOYEE"
                ? "border-2 border-constructive"
                : "border border-constructive/60"
            } p-4 lg:p-6 relative  rounded-xl  shadow-md  transition w-[45vw] lg:h-[15vh] lg:w-[15vw]  lg:hover:border-2 lg:hover:border-constructive cursor-pointer`}
          >
            <div className="absolute top-2 lg:top-4 lg:right-4 right-2">
              <RadioGroupItem
                circleClassName="fill-constructive"
                className="border-constructive w-5 h-5 "
                value="Employee"
                id="employee"
                checked={accountType === "EMPLOYEE"}
              />
            </div>
            <p className="lg:text-xl font-semibold mb-2">I’m an Employee</p>
            <p className="lg:text-sm text-muted-foreground">
              I’m looking for full-time or part-time jobs with companies.
            </p>
          </div>

          {/* Employer */}
          <div
            onClick={() => {
              handleSelectAccoutnType("EMPLOYER");
            }}
            className={` ${
              accountType === "EMPLOYER"
                ? "border-2 border-constructive"
                : "border border-constructive/60"
            } p-4 lg:p-6 relative  rounded-xl  shadow-md  transition w-[45vw] lg:h-[15vh] lg:w-[15vw]  lg:hover:border-2 lg:hover:border-constructive cursor-pointer`}
          >
            <div className="absolute top-2 lg:top-4 lg:right-4 right-2">
              <RadioGroupItem
                circleClassName="fill-constructive"
                className="border-constructive w-5 h-5 "
                value="Employer"
                id="employer"
                checked={accountType === "EMPLOYER"}
              />
            </div>
            <p className="lg:text-xl font-semibold mb-2">I’m an Employer</p>
            <p className="lg:text-sm text-muted-foreground">
              I want to hire employees to build and grow my team.
            </p>
          </div>
        </div>
      </RadioGroup>

      <Button
        onClick={handleConfigRoleType}
        disabled={!accountType}
        className="px-10 mt-4 rounded-full"
        variant={"constructive"}
      >
        Join as a {accountType?.toLowerCase()}
      </Button>
    </div>
  );
}

export default DashboardJoinAs;
