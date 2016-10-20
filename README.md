# Water Pistol

A configurable SOAP server. Water pistol will act as a goto from SOAP messages to ZMQ messages. The server is designed to be configurable so that all that is required to expose SOAP services is JSON based configruation. Water pistol takes an opioniated stance on messaging between microservices and uses ZMQ and protocol buffers.

## Libraries Used
 * Node Soap : Node soap is the library used to act as a soap server.
 * Protocol Buffers : Protocol buffers are used to serlilze data from incoming requests and dispatch to any other required microservices. 
