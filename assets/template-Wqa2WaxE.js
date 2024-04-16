const e=`<div class="observer page">
  <h2>Observer Pattern</h2>
  <p>
    The Observer pattern defines a one-to-many dependency between objects so
    that when one object changes state, all its dependents are notified and
    updated automatically.
  </p>
  <p>
    The Observer pattern is a design principle that establishes a one-to-many
    relationship between objects, allowing a single subject to notify multiple
    observers about changes in its state. This pattern is instrumental in
    implementing distributed event handling systems, where the subject, often
    referred to as the publisher, emits notifications that are captured by
    observers or subscribers. The essence of this pattern lies in promoting
    loose coupling, as the subject doesn't need to know anything about the
    observers, thus facilitating dynamic interactions within complex systems.
  </p>
  <h3>Example:</h3>
  <pre id="example"></pre>
</div>
`;export{e as default};
