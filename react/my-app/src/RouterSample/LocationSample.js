import React, { useEffect, useState } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

function LocationSample() {

    let location = useLocation()

    console.log('location', location)

    // urlde ? sonrasını search bize verir

    function useQuery() {

        let {search} = location;
      
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    
    let query = useQuery()

    console.log('query', query.get("name") ,query.get("surname"))


  return (
    <>


    
    
    </>
  )
}

export default LocationSample