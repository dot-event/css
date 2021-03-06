/* global document */
/* eslint-env jest */

var dot = require("dot-event")(),
  JSDOM = require("jsdom").JSDOM

var window = new JSDOM().window

require("./")(dot)

var css = dot.css

global.document = window.document

test("css", function() {
  var link = css({ href: "blah.css" })

  expect(link.tagName).toBe("LINK")
  expect(link.type).toBe("text/css")
  expect(link.rel).toBe("stylesheet")
  expect(link.href).toBe("blah.css")

  expect(document.head.innerHTML).toBe(
    // prettier-ignore
    "<link type=\"text/css\" rel=\"stylesheet\" href=\"blah.css\">"
  )
})
