import { Badge, Card, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { img_300, unavailable } from '../config/config';
import Cmodal from './Cmodal';

const Template = ({ date, id, media_type, poster, vote_average, title }) => {
  return (
    <Cmodal media_type={media_type} id={id}>
      <Badge badgeContent={vote_average} color={vote_average > 6 ? "primary" : "secondary"}  >
        <Card sx={{ maxWidth: 200, margin: '15px 20px' }} >
          <CardMedia
            component="img"
            height="300"
            image={poster ? `${img_300}/${poster}` : unavailable}
            alt={title}
          />
          <CardContent style={{ padding: '9px 9px 6px' }}>
            <Typography noWrap={true} align="center" variant="subtitle2" component="div" style={{ marginBottom: '3px' }}>
              {title}
            </Typography>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <Typography variant="subtitle2" component="div">
                {media_type === "tv" ? "TV Series" : "Movies"}
              </Typography>
              <Typography variant="subtitle2" component="div">
                {date}
              </Typography>
            </div>
          </CardContent>
        </Card>
      </Badge>
    </Cmodal>
    // <div >
    //     <img src={poster?`${img_300}/${poster}`:unavailable} alt="" />
    // </div>
  )
}

export default Template;


