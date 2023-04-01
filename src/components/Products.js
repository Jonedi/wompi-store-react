import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AddShoppingCart } from '@mui/icons-material';
import accounting from 'accounting';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Product() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <Typography
            variante="h4"
            color="textSecondary"
          >
            { accounting.formatMoney(50, "$") }
          </Typography>
        }
        title="Cap Black"
        subheader="in Stock"
      />
      <CardMedia
        component="img"
        height="194"
        image="/products/mercedes-amg-petronas-f1-2023-lewis-hamilton-cap-black.avif"
        alt="Lewis Hamilton Cap"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            Mercedes AMG Petronas F1 2023 Lewis Hamilton Cap - Black
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to card" >
          <AddShoppingCart fontSize='large' />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Show your Mercedes team affiliation whether you’re right at the edge of the track or somewhere else entirely with the official Mercedes Replica collection. For wearing your Mercedes team pride anywhere you go there’s nothing better than this cap, featuring the Mercedes badge embroidered on the front crown and an all-over pattern with the team logo on the rear. An adjustable snap closure at the rear ensures you can get the perfect fit.</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
