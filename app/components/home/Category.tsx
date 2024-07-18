'use client'
function Category() {
  const categoryList = [
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
    { name: 'Kategori' },
  ];
  return (
    <div className="flex justify-content-center items-center gap-3 md:gap-10 py-5 md:my-10 overflow-x-auto">
      {
        categoryList.map((category, index) =>
          <div className="border rounded-full min-w-[120px] text-center px-4 py-3" key={index}>{category.name}</div>
        )
      }
    </div>
  )
}

export default Category