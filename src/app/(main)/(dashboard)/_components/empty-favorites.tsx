import Image from 'next/image';

export const EmptyFavorite = () => {
    return(
        <div className='h-full flex flex-col items-center justify-center'>
            <Image 
              src="/assets/empty-favorites.svg"
              height={140}
              width={140}
              alt="Empty Search"/>
            <h2 className="text-2xl font-semibold mt-6">No Favorite Boards</h2>
            <p className="text-muted-foreground text-sm mt-2">Try to Favorite a Board</p>
        </div>
    )
}