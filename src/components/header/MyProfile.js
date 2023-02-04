import { Badge } from "rsuite";
import { FaBell, FaEnvelope } from "react-icons/fa";
import { Avatar } from "@mui/material";
import "rsuite/dist/rsuite.min.css";

const MyProfile = () => {
  return (
    <div className="myProfile">
      <Badge content={999} className="flex flex-col justify-end items-center">
        <button>
          <FaBell size={25} />
        </button>
      </Badge>
      <Badge content={555} className="flex flex-col justify-end items-center">
        <button>
          <FaEnvelope size={25} />
        </button>
      </Badge>
      <button>
        <Avatar
          sx={{ width: 33, height: 33, bgcolor: "#575757" }}
          src="/static/images/avatar/1.jpg"
        />
      </button>
    </div>
  );
};

export default MyProfile;
