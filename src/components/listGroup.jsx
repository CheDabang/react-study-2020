import React from "react";

//  旧版00版本
// const ListGroup = (props) => {
//   return (
//     <ul className="list-group">
//       <li
//         className="list-group-item"
//         onClick={() => props.onGenreSelect("all")}
//       >
//         allList
//       </li>
//       {props.genres.map((genre) => (
//         <li
//           className="list-group-item"
//           onClick={() => props.onGenreSelect(genre)}
//           key={genre._id}
//         >
//           {genre.name}
//         </li>
//       ))}
//     </ul>
//   );
// };

const ListGroup = (props) => {
  const {
    items,
    textProerty,
    valueProerty,
    selectedItem,
    onItemSelect,
  } = props;

  return (
    <ul className="list-group">
      {items.map((item) => (
        <li
          className={
            item === selectedItem ? "list-group-item active" : "list-group-item"
          }
          key={item[valueProerty]}
          onClick={() => onItemSelect(item)}
        >
          {item[textProerty]}
        </li>
      ))}
    </ul>
  );
};

// 设置默认值

ListGroup.defaultProps = {
  textProerty: "name",
  valueProerty: "_id",
};

export default ListGroup;
