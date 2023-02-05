import {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
} from "@mui/material";
import { Favorite, MoreVert } from "@mui/icons-material";

const PostSection = () => {
  return (
    <div className="w-full block border shadow border-gray-200 bg-white">
      <CardHeader sx={{pb:0}}
        avatar={<Avatar alt={"aadd"} />}
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image="https://fastly.picsum.photos/id/386/536/354.jpg?hmac=uDyM9vscmQYcD8ccdlTMiqnmLH6QX3LFBmId4m8a2mY"
        alt="Paella dish"
      />
      <CardActions>
        <IconButton aria-label="add to favorites">
          <Favorite />
        </IconButton>
      </CardActions>
    </div>
  );
};

export default PostSection;
