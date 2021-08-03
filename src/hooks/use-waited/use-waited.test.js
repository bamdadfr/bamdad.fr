import { renderHook } from '@testing-library/react-hooks'
import { useWaited } from './use-waited'

describe ('useWaited', () => {

    describe ('waited', () => {

        it ('should default to false', () => {

            const { result } = renderHook (() => useWaited ())

            expect (result.current[0]).toBe (false)
        
        })
    
    })

})