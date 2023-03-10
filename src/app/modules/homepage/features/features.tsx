import { Button } from "react-daisyui";
import { useNavigate } from "react-router-dom";
import resume_1 from "../../../../assets/images/resume_smp_1.png";
import resume_2 from "../../../../assets/images/resume_smp_2.png";
import "./features.scss";
export default function Features(params: any) {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full p-8 grid grid-cols-3 bg-base-300">
        <div className="flex flex-col gap-6 justify-center  p-10 ">
          <h2 className="text-3xl font-bold">
            Elevate your career with a flawless resume, crafted by Resume.Craft
          </h2>
          <h6>
            Getting that dream job can seem like an impossible task. We’re here
            to change that. Give yourself a real advantage with the best online
            resume maker: created by experts, improved by data, trusted by
            millions of professionals.
          </h6>
          <div className="flex gap-6">
            <Button onClick={() => navigate("/create-resume")} color="primary">
              Choose Template
            </Button>
          </div>
        </div>
        <div className="flex flex-row gap-6 justify-center items-center col-span-2">
          <img className="w-1/4" alt="Resume_1" src={resume_1} />
          <img className="w-1/3" alt="Resume_2" src={resume_2} />
          <img className="w-1/4" alt="Resume_3" src={resume_1} />
        </div>
      </div>
      <div className="w-full bg-base-200 feature-img-container">
        <div className="w-full grid grid-cols-3">
          <div className="flex flex-col col-start-2 gap-6 justify-center items-center text-center ">
            <h2 className="text-3xl font-bold">
              Craft your career with a standout resume, powered by Resume.Craft.
            </h2>
            <h6>
              Getting that dream job can seem like an impossible task. We’re
              here to change that. Give yourself a real advantage with the best
              online resume maker: created by experts, improved by data, trusted
              by millions of professionals.
            </h6>
            <div className="flex gap-6">
              <Button
                onClick={() => navigate("/create-resume")}
                color="primary"
              >
                Create now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
