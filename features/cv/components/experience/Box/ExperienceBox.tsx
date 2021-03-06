import { format } from 'date-fns';
import { ReactNode } from 'react';
import classes from './ExperienceBox.module.scss';

interface Props {
  jobTitle: string;
  company: string;
  from: Date;
  showDay?: boolean;
  to?: Date;
  place?: string;
  description: ReactNode;
  contact?: string;
}

const ExperienceBox: React.FC<Props> = ({
  jobTitle,
  company,
  from,
  showDay = false,
  to,
  place,
  description,
  contact,
}) => (
  <div className={classes.container}>
    <h3 className={classes.container__jobTitle}>{jobTitle}</h3>
    <h5 className={classes.container__company}>{company}</h5>
    <div className={classes.container__information}>
      <div className={classes.container__information__date}>
        {format(from, `${showDay ? 'dd/' : ''}MM/yyyy`)} -{' '}
        {to ? format(to, `${showDay ? 'dd/' : ''}MM/yyyy`) : 'Presente'}
      </div>
      {place && <div className={classes.container__information__place}>{place}</div>}
    </div>
    <p className={classes.container__description}>{description}</p>
    {contact && (
      <div className={classes.container__contact}>
        <strong>Contacto:</strong> {contact}
      </div>
    )}
  </div>
);

export default ExperienceBox;
