import Button from 'react-bootstrap/Button';

export function GalleryShowBtn({ boxes, setFilterBoxes }) {
  
    const buttons = [
      {
        name: "Ver todo",
        value: "Ver todo",
      },
      {
        name: "Instalaciones",
        value: "Instalaciones",
      },
      {
        name: "Box 1",
        value: "Box 1",
      },
      {
        name: "Box 2",
        value: "Box 2",
      },
      {
        name: "Box 3",
        value: "Box 3",
      },
    ];
  
    const handleButton = (e) => {
      let typeProject = e.target.value;
      
      typeProject !== "all"
        ? setFilterBoxes(boxes.filter((b) => b.originalTitle === typeProject))
        : setFilterBoxes(boxes);
    };
  
    return (
      <>
        {buttons.map((b, i) => (
          <Button variant="primary"
            key={i}
            value={b.value}
            onClick={handleButton}
          >
            {b.name}
          </Button>
        ))}
      </>
    );
  }