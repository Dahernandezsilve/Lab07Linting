/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import './infoBlocks.css';

function InformationBlock(
  {
    img, title, text, link, text2,
  },
) {
  return (
    <div className="info_Blocks">
      <img src={img} alt="info" height="75px" />
      <h3>{title}</h3>
      <p>
        {text}
        <a href={link}>
          {text2}
        </a>
      </p>
    </div>
  );
}

export default InformationBlock;
