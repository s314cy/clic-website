/**
 * Abstract class defining a web page
 * All web pages must inherit from this class
 * CLIC website software
 *
 * @author  Alexandre CHAU
 *
 * @example
 * class FooPage extends Page {
 *     render(req: Request, res: Response) {
 *         res.render("foo_template.njk", {foo: "bar"})
 *     }
 * }
 */

import { Request, Response } from 'express'

abstract class Page {
    /**
     * The render method invokes the rendering engine on the response to
     * generate the page's view
     *
     * This function is implemented as a member closure instead of an overriden
     * function to keep the "this" semantics in children classes
     *
     * @param req the express Request for the route of this page
     * @param res the express Response that will send the page (concrete
     * redefinitions must invoke res.render)
     */
    abstract readonly render: (req: Request, res: Response) => void
}
export { Page }