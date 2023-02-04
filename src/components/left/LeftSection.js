import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar,
  Typography,
} from "@mui/material";

const LeftSection = ({ clubs }) => {
  return (
    <div className="leftAndRight leftSection">
      <h4>Üye Olduğunuz Kulüpler</h4>
      <List sx={{ width: "100%", height: "100%", p: 0, m: 0, mt: 3 }}>
        {clubs.map((row, i) => (
          <ListItem
            alignItems="flex-start"
            sx={{ width: "100%", p: 0, m: 0, mb: 1 }}
          >
            <ListItemAvatar sx={{ pr: 2 }}>
              <Avatar
                alt={row.name}
                src={row.avatar}
                sx={{ width: 40, height: 40 }}
              />
            </ListItemAvatar>
            <ListItemText
              primary={<Typography variant="subtitle1">{row.name}</Typography>}
              secondary={
                <span className="block text-xs">
                  {row.createDate} Tarihinde Kuruldu
                </span>
              }
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default LeftSection;
