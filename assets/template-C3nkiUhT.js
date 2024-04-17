const e=`<div class="command page">
  <h2>Command Pattern</h2>
  <p>
    The Command pattern encapsulates a request as an object, thereby allowing
    for parameterization of clients with queues, requests, and operations. It
    also allows for the support of undoable operations.
  </p>
  <p>
    Essentially, the Command pattern allows for the separation of concerns
    between an object that invokes a command and the object that knows how to
    perform it. This is achieved by encapsulating a request as an object, which
    can include the command to be executed and its parameters. This pattern is
    particularly useful in scenarios where commands need to be queued, undone,
    or logged.
  </p>
  <h3>Example:</h3>
  <pre id="example"></pre>

  <div class="pagination"><a href="/catalog/behavior/mediator">Mediator</a><a href="/catalog/creation/constructor">Constructor</a></div>
</div>
`;export{e as default};
