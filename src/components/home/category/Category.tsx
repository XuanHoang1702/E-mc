import CircularGallery from './CircularGallery'

const Category: React.FC = () => {
    return (
        <div style={{ height: '600px', position: 'relative' }}>
            <CircularGallery bend={0} textColor="#ffffff" borderRadius={0.05} scrollEase={0.01}/>
        </div>
    );
}

export default Category;