import React from 'react' 

class CategoryFilter extends React.Component{
    render(){
        const {categories, onSelectCategory, selectedCategory} = this.props;

        return(
            <div className='categories'>
                <h5>Category filters</h5>
                {categories.map((category, index) => {
                    return (
                        <button 
                            className={selectedCategory === category ? 'selected' : undefined}
                            onClick={()=>onSelectCategory(category)}
                            key={index}
                        >
                             {category}
                        </button>
                        );
                    })}
            </div>
        )
    }
};


export default CategoryFilter