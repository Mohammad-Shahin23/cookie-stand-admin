export default function Footer(props) {
    let total = props.infoList.length;
    
    return (
      <footer className="flex items-center justify-between p-8 bg-blue-500 text-black-500">
        
        <p>{total} Locations World Wide</p>
        
      </footer>
    );
  }