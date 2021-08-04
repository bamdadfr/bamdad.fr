import { renderHook } from '@testing-library/react-hooks'
import { useFirstRender } from './use-first-render'

describe ('useFirstRender', () => {

    describe ('firstRender', () => {

        it ('should default to true', () => {

            const { result } = renderHook (() => useFirstRender ())

            expect (result.current.firstRender).toBe (true)
        
        })
    
    })

})