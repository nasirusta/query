import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Typography,
} from "@mui/material";

const RightSection = ({ clubs }) => {
  return (
    <div className="leftAndRight rightSection">
      <h4>Popüler Kulüpler</h4>
      <div className="w-full block">
        <List sx={{ width: "100%", height: "100%", p: 0, m: 0, mt: 3 }}>
          {clubs.map((row, i) => (
            <ListItem
              alignItems="flex-start"
              sx={{ width: "100%", p: 0, m: 0 }}
              href="/a"
            >
              <ListItemButton
                sx={{ width: "100%", p: 0, m: 0 }}
                component="a"
                href="#simple-list"
              >
                <ListItemAvatar>
                  <Avatar
                    alt={row.name}
                    src={row.avatar}
                    sx={{ width: 34, height: 34 }}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="subtitle1">{row.name}</Typography>
                  }
                  secondary="(94) Üye"
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default RightSection;
