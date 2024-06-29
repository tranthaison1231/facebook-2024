function NodeUserItem({className,children}:{className:string,children: React.ReactNode}) {
    return ( 
        <div className={`p-2 rounded-md border-2 border-white border-solid bg-[#E9ECEF] hover:bg-gray-200 ${className}`}>
            {children}
        </div>
     );
}

export default NodeUserItem;