//www.apache.org/licenses/LICENSE-2.0
/////////////////////////////
/// Worker APIs
/////////////////////////////
interface AddEventListenerOptions extends EventListenerOptions {
    once?: boolean
    passive?: boolean
}
interface AesCbcParams extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
}
interface AesCtrParams extends Algorithm {
    counter: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
    length: number
}
interface AesDerivedKeyParams extends Algorithm {
    length: number
}
interface AesGcmParams extends Algorithm {
    additionalData?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
    tagLength?: number
}
interface AesKeyAlgorithm extends KeyAlgorithm {
    length: number
}
interface AesKeyGenParams extends Algorithm {
    length: number
}
interface Algorithm {
    name: string
}
interface BlobPropertyBag {
    endings?: EndingType
    type?: string
}
interface CacheQueryOptions {
    ignoreMethod?: boolean
    ignoreSearch?: boolean
    ignoreVary?: boolean
}
interface CanvasRenderingContext2DSettings {
    alpha?: boolean
    desynchronized?: boolean
}
interface ClientQueryOptions {
    includeUncontrolled?: boolean
    type?: ClientTypes
}
interface CloseEventInit extends EventInit {
    code?: number
    reason?: string
    wasClean?: boolean
}
interface CryptoKeyPair {
    privateKey?: CryptoKey
    publicKey?: CryptoKey
}
interface CustomEventInit<T = any> extends EventInit {
    detail?: T
}
interface DOMMatrix2DInit {
    a?: number
    b?: number
    c?: number
    d?: number
    e?: number
    f?: number
    m11?: number
    m12?: number
    m21?: number
    m22?: number
    m41?: number
    m42?: number
}
interface DOMMatrixInit extends DOMMatrix2DInit {
    is2D?: boolean
    m13?: number
    m14?: number
    m23?: number
    m24?: number
    m31?: number
    m32?: number
    m33?: number
    m34?: number
    m43?: number
    m44?: number
}
interface DOMPointInit {
    w?: number
    x?: number
    y?: number
    z?: number
}
interface DOMQuadInit {
    p1?: DOMPointInit
    p2?: DOMPointInit
    p3?: DOMPointInit
    p4?: DOMPointInit
}
interface DOMRectInit {
    height?: number
    width?: number
    x?: number
    y?: number
}
interface DevicePermissionDescriptor extends PermissionDescriptor {
    deviceId?: string
    name: "camera" | "microphone" | "speaker"
}
interface EcKeyGenParams extends Algorithm {
    namedCurve: NamedCurve
}
interface EcKeyImportParams extends Algorithm {
    namedCurve: NamedCurve
}
interface EcdhKeyDeriveParams extends Algorithm {
    public: CryptoKey
}
interface EcdsaParams extends Algorithm {
    hash: HashAlgorithmIdentifier
}
interface ErrorEventInit extends EventInit {
    colno?: number
    error?: any
    filename?: string
    lineno?: number
    message?: string
}
interface EventInit {
    bubbles?: boolean
    cancelable?: boolean
    composed?: boolean
}
interface EventListenerOptions {
    capture?: boolean
}
interface EventSourceInit {
    withCredentials?: boolean
}
interface ExtendableEventInit extends EventInit {
}
interface ExtendableMessageEventInit extends ExtendableEventInit {
    data?: any
    lastEventId?: string
    origin?: string
    ports?: MessagePort[]
    source?: Client | ServiceWorker | MessagePort | null
}
interface FetchEventInit extends ExtendableEventInit {
    clientId?: string
    preloadResponse?: Promise<any>
    replacesClientId?: string
    request: Request
    pieceingClientId?: string
}
interface FilePropertyBag extends BlobPropertyBag {
    lastModified?: number
}
interface GetNotificationOptions {
    tag?: string
}
interface HmacImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier
    length?: number
}
interface HmacKeyGenParams extends Algorithm {
    hash: HashAlgorithmIdentifier
    length?: number
}
interface IDBIndexParameters {
    multiEntry?: boolean
    unique?: boolean
}
interface IDBObjectStoreParameters {
    autoIncrement?: boolean
    keyPath?: string | string[] | null
}
interface IDBVersionChangeEventInit extends EventInit {
    newVersion?: number | null
    oldVersion?: number
}
interface ImageBitmapOptions {
    colorSpaceConversion?: ColorSpaceConversion
    imageOrientation?: ImageOrientation
    premultiplyAlpha?: PremultiplyAlpha
    resizeHeight?: number
    resizeQuality?: ResizeQuality
    resizeWidth?: number
}
interface ImageBitmapRenderingContextSettings {
    alpha?: boolean
}
interface ImageEncodeOptions {
    quality?: number
    type?: string
}
interface JsonWebKey {
    alg?: string
    crv?: string
    d?: string
    dp?: string
    dq?: string
    e?: string
    ext?: boolean
    k?: string
    key_ops?: string[]
    kty?: string
    n?: string
    oth?: RsaOtherPrimesInfo[]
    p?: string
    q?: string
    qi?: string
    use?: string
    x?: string
    y?: string
}
interface KeyAlgorithm {
    name: string
}
interface MessageEventInit extends EventInit {
    data?: any
    lastEventId?: string
    origin?: string
    ports?: MessagePort[]
    source?: MessageEventSource | null
}
interface MidiPermissionDescriptor extends PermissionDescriptor {
    name: "midi"
    sysex?: boolean
}
interface MultiCacheQueryOptions extends CacheQueryOptions {
    cacheName?: string
}
interface NavigationPreloadState {
    enabled?: boolean
    headerValue?: string
}
interface NotificationAction {
    action: string
    icon?: string
    title: string
}
interface NotificationEventInit extends ExtendableEventInit {
    action?: string
    notification: Notification
}
interface NotificationOptions {
    actions?: NotificationAction[]
    badge?: string
    body?: string
    data?: any
    dir?: NotificationDirection
    icon?: string
    image?: string
    lang?: string
    renotify?: boolean
    requireInteraction?: boolean
    silent?: boolean
    tag?: string
    timestamp?: number
    vibrate?: VibratePattern
}
interface Pbkdf2Params extends Algorithm {
    hash: HashAlgorithmIdentifier
    iterations: number
    salt: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
}
interface PerformanceObserverInit {
    buffered?: boolean
    entryTypes?: string[]
    type?: string
}
interface PermissionDescriptor {
    name: PermissionName
}
interface PipeOptions {
    preventAbort?: boolean
    preventCancel?: boolean
    preventClose?: boolean
    signal?: AbortSignal
}
interface PostMessageOptions {
    transfer?: any[]
}
interface ProgressEventInit extends EventInit {
    lengthComputable?: boolean
    loaded?: number
    total?: number
}
interface PromiseRejectionEventInit extends EventInit {
    promise: Promise<any>
    reason?: any
}
interface PushEventInit extends ExtendableEventInit {
    data?: PushMessageDataInit
}
interface PushPermissionDescriptor extends PermissionDescriptor {
    name: "push"
    userVisibleOnly?: boolean
}
interface PushSubscriptionChangeEventInit extends ExtendableEventInit {
    newSubscription?: PushSubscription
    oldSubscription?: PushSubscription
}
interface PushSubscriptionJSON {
    endpoint?: string
    expirationTime?: number | null
    keys?: Record<string, string>
}
interface PushSubscriptionOptionsInit {
    applicationServerKey?: BufferSource | string | null
    userVisibleOnly?: boolean
}
interface QueuingStrategy<T = any> {
    highWaterMark?: number
    size?: QueuingStrategySizeCallback<T>
}
interface ReadableStreamReadDonePiece<T> {
    done: true
    value?: T
}
interface ReadableStreamReadValuePiece<T> {
    done: false
    value: T
}
interface RegistrationOptions {
    scope?: string
    type?: WorkerType
    updateViaCache?: ServiceWorkerUpdateViaCache
}
interface RequestInit {
    /**
     * A BodyInit object or null to set request's body.
     */
    body?: BodyInit | null
    /**
     * A string indicating how the request will interact with the browser's cache to set request's cache.
     */
    cache?: RequestCache
    /**
     * A string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL. Sets request's credentials.
     */
    credentials?: RequestCredentials
    /**
     * A Headers object, an object literal, or an array of two-item arrays to set request's headers.
     */
    headers?: HeadersInit
    /**
     * A cryptographic hash of the resource to be fetched by request. Sets request's integrity.
     */
    integrity?: string
    /**
     * A boolean to set request's keepalive.
     */
    keepalive?: boolean
    /**
     * A string to set request's method.
     */
    method?: string
    /**
     * A string to indicate whether the request will use CORS, or will be restricted to same-origin URLs. Sets request's mode.
     */
    mode?: RequestMode
    /**
     * A string indicating whether request follows redirects, pieces in an error upon encountering a redirect, or returns the redirect (in an opaque fashion). Sets request's redirect.
     */
    redirect?: RequestRedirect
    /**
     * A string whose value is a same-origin URL, "about:client", or the empty string, to set request's referrer.
     */
    referrer?: string
    /**
     * A referrer policy to set request's referrerPolicy.
     */
    referrerPolicy?: ReferrerPolicy
    /**
     * An AbortSignal to set request's signal.
     */
    signal?: AbortSignal | null
    /**
     * Can only be null. Used to disassociate request from any Window.
     */
    window?: any
}
interface ResponseInit {
    headers?: HeadersInit
    status?: number
    statusText?: string
}
interface RsaHashedImportParams extends Algorithm {
    hash: HashAlgorithmIdentifier
}
interface RsaHashedKeyGenParams extends RsaKeyGenParams {
    hash: HashAlgorithmIdentifier
}
interface RsaKeyGenParams extends Algorithm {
    modulusLength: number
    publicExponent: BigInteger
}
interface RsaOaepParams extends Algorithm {
    label?: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
}
interface RsaOtherPrimesInfo {
    d?: string
    r?: string
    t?: string
}
interface RsaPssParams extends Algorithm {
    saltLength: number
}
interface StorageEstimate {
    quota?: number
    usage?: number
}
interface SyncEventInit extends ExtendableEventInit {
    lastChance?: boolean
    tag: string
}
interface TextDecodeOptions {
    stream?: boolean
}
interface TextDecoderOptions {
    fatal?: boolean
    ignoreBOM?: boolean
}
interface TextEncoderEncodeIntoPiece {
    read?: number
    written?: number
}
interface Transformer<I = any, O = any> {
    flush?: TransformStreamDefaultControllerCallback<O>
    readableType?: undefined
    start?: TransformStreamDefaultControllerCallback<O>
    transform?: TransformStreamDefaultControllerTransformCallback<I, O>
    writableType?: undefined
}
interface UnderlyingByteSource {
    autoAllocateChunkSize?: number
    cancel?: ReadableStreamErrorCallback
    pull?: ReadableByteStreamControllerCallback
    start?: ReadableByteStreamControllerCallback
    type: "bytes"
}
interface UnderlyingSink<W = any> {
    abort?: WritableStreamErrorCallback
    close?: WritableStreamDefaultControllerCloseCallback
    start?: WritableStreamDefaultControllerStartCallback
    type?: undefined
    write?: WritableStreamDefaultControllerWriteCallback<W>
}
interface UnderlyingSource<R = any> {
    cancel?: ReadableStreamErrorCallback
    pull?: ReadableStreamDefaultControllerCallback<R>
    start?: ReadableStreamDefaultControllerCallback<R>
    type?: undefined
}
interface WebGLContextAttributes {
    alpha?: boolean
    antialias?: boolean
    depth?: boolean
    desynchronized?: boolean
    failIfMajorPerformanceCaveat?: boolean
    powerPreference?: WebGLPowerPreference
    premultipliedAlpha?: boolean
    preserveDrawingBuffer?: boolean
    stencil?: boolean
}
interface WebGLContextEventInit extends EventInit {
    statusMessage?: string
}
interface WorkerOptions {
    credentials?: RequestCredentials
    name?: string
    type?: WorkerType
}
interface EventListener {
    (evt: Event): void
}
/** The ANGLE_instanced_arrays extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type. */
interface ANGLE_instanced_arrays {
    drawArraysInstancedANGLE(mode: GLenum, first: GLint, count: GLsizei, primcount: GLsizei): void
    drawElementsInstancedANGLE(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, primcount: GLsizei): void
    vertexAttribDivisorANGLE(index: GLuint, divisor: GLuint): void
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR_ANGLE: GLenum
}
/** A controller object that allows you to abort one or more DOM requests as and when desired. */
interface AbortController {
    /**
     * Returns the AbortSignal object associated with this object.
     */
    readonly signal: AbortSignal
    /**
     * Invoking this method will set this object's AbortSignal's aborted flag and signal to any observers that the associated activity is to be aborted.
     */
    abort(): void
}
interface AbortSignalEventMap {
    "abort": Event
}
/** A signal object that allows you to communicate with a DOM request (such as a Fetch) and abort it if required via an AbortController object. */
interface AbortSignal extends EventTarget {
    /**
     * Returns true if this AbortSignal's AbortController has signaled to abort, and false otherwise.
     */
    readonly aborted: boolean
    onabort: ((this: AbortSignal, ev: Event) => any) | null
    addEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof AbortSignalEventMap>(type: K, listener: (this: AbortSignal, ev: AbortSignalEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface AbstractWorkerEventMap {
    "error": ErrorEvent
}
interface AbstractWorker {
    onerror: ((this: AbstractWorker, ev: ErrorEvent) => any) | null
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: AbstractWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface AesCfbParams extends Algorithm {
    iv: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
}
interface AesCmacParams extends Algorithm {
    length: number
}
interface AnimationFrameProvider {
    cancelAnimationFrame(handle: number): void
    requestAnimationFrame(callback: FrameRequestCallback): number
}
/** A file-like object of immutable, raw data. Blobs represent data that isn't necessarily in a JavaScript-native format. The File interface is based on Blob, inheriting blob functionality and expanding it to support files on the user's system. */
interface Blob {
    readonly size: number
    readonly type: string
    arrayBuffer(): Promise<ArrayBuffer>
    slice(start?: number, end?: number, contentType?: string): Blob
    stream(): ReadableStream
    text(): Promise<string>
}
interface Body {
    readonly body: ReadableStream<Uint8Array> | null
    readonly bodyUsed: boolean
    arrayBuffer(): Promise<ArrayBuffer>
    blob(): Promise<Blob>
    formData(): Promise<FormData>
    json(): Promise<any>
    text(): Promise<string>
}
interface BroadcastChannelEventMap {
    "message": MessageEvent
    "messageerror": MessageEvent
}
interface BroadcastChannel extends EventTarget {
    /**
     * Returns the channel name (as passed to the constructor).
     */
    readonly name: string
    onmessage: ((this: BroadcastChannel, ev: MessageEvent) => any) | null
    onmessageerror: ((this: BroadcastChannel, ev: MessageEvent) => any) | null
    /**
     * Closes the BroadcastChannel object, opening it up to garbage collection.
     */
    close(): void
    /**
     * Sends the given message to other BroadcastChannel objects set up for this channel. Messages can be structured objects, e.g. nested objects and arrays.
     */
    postMessage(message: any): void
    addEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof BroadcastChannelEventMap>(type: K, listener: (this: BroadcastChannel, ev: BroadcastChannelEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams. */
interface ByteLengthQueuingStrategy extends QueuingStrategy<ArrayBufferView> {
    highWaterMark: number
    size(chunk: ArrayBufferView): number
}
/** Provides a storage mechanism for Request / Response object pairs that are cached, for example as part of the ServiceWorker life cycle. Note that the Cache interface is exposed to windowed scopes as well as workers. You don't have to use it in conjunction with service workers, even though it is defined in the service worker spec. */
interface Cache {
    add(request: RequestInfo): Promise<void>
    addAll(requests: RequestInfo[]): Promise<void>
    delete(request: RequestInfo, options?: CacheQueryOptions): Promise<boolean>
    keys(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Request>>
    match(request: RequestInfo, options?: CacheQueryOptions): Promise<Response | undefined>
    matchAll(request?: RequestInfo, options?: CacheQueryOptions): Promise<ReadonlyArray<Response>>
    put(request: RequestInfo, response: Response): Promise<void>
}
/** The storage for Cache objects. */
interface CacheStorage {
    delete(cacheName: string): Promise<boolean>
    has(cacheName: string): Promise<boolean>
    keys(): Promise<string[]>
    match(request: RequestInfo, options?: MultiCacheQueryOptions): Promise<Response | undefined>
    open(cacheName: string): Promise<Cache>
}
interface CanvasCompositing {
    globalAlpha: number
    globalCompositeOperation: string
}
interface CanvasDrawImage {
    drawImage(image: CanvasImageSource, dx: number, dy: number): void
    drawImage(image: CanvasImageSource, dx: number, dy: number, dw: number, dh: number): void
    drawImage(image: CanvasImageSource, sx: number, sy: number, sw: number, sh: number, dx: number, dy: number, dw: number, dh: number): void
}
interface CanvasDrawPath {
    beginPath(): void
    clip(fillRule?: CanvasFillRule): void
    clip(path: Path2D, fillRule?: CanvasFillRule): void
    fill(fillRule?: CanvasFillRule): void
    fill(path: Path2D, fillRule?: CanvasFillRule): void
    isPointInPath(x: number, y: number, fillRule?: CanvasFillRule): boolean
    isPointInPath(path: Path2D, x: number, y: number, fillRule?: CanvasFillRule): boolean
    isPointInStroke(x: number, y: number): boolean
    isPointInStroke(path: Path2D, x: number, y: number): boolean
    stroke(): void
    stroke(path: Path2D): void
}
interface CanvasFillStrokeStyles {
    fillStyle: string | CanvasGradient | CanvasPattern
    strokeStyle: string | CanvasGradient | CanvasPattern
    createLinearGradient(x0: number, y0: number, x1: number, y1: number): CanvasGradient
    createPattern(image: CanvasImageSource, repetition: string | null): CanvasPattern | null
    createRadialGradient(x0: number, y0: number, r0: number, x1: number, y1: number, r1: number): CanvasGradient
}
interface CanvasFilters {
    filter: string
}
/** An opaque object describing a gradient. It is returned by the methods CanvasRenderingContext2D.createLinearGradient() or CanvasRenderingContext2D.createRadialGradient(). */
interface CanvasGradient {
    /**
     * Adds a color stop with the given color to the gradient at the given offset. 0.0 is the offset at one end of the gradient, 1.0 is the offset at the other end.
     * 
     * Throws an "IndexSizeError" DOMException if the offset is out of range. Throws a "SyntaxError" DOMException if the color cannot be parsed.
     */
    addColorStop(offset: number, color: string): void
}
interface CanvasImageData {
    createImageData(sw: number, sh: number): ImageData
    createImageData(imagedata: ImageData): ImageData
    getImageData(sx: number, sy: number, sw: number, sh: number): ImageData
    putImageData(imagedata: ImageData, dx: number, dy: number): void
    putImageData(imagedata: ImageData, dx: number, dy: number, dirtyX: number, dirtyY: number, dirtyWidth: number, dirtyHeight: number): void
}
interface CanvasImageSmoothing {
    imageSmoothingEnabled: boolean
    imageSmoothingQuality: ImageSmoothingQuality
}
interface CanvasPath {
    arc(x: number, y: number, radius: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
    arcTo(x1: number, y1: number, x2: number, y2: number, radius: number): void
    bezierCurveTo(cp1x: number, cp1y: number, cp2x: number, cp2y: number, x: number, y: number): void
    closePath(): void
    ellipse(x: number, y: number, radiusX: number, radiusY: number, rotation: number, startAngle: number, endAngle: number, anticlockwise?: boolean): void
    lineTo(x: number, y: number): void
    moveTo(x: number, y: number): void
    quadraticCurveTo(cpx: number, cpy: number, x: number, y: number): void
    rect(x: number, y: number, w: number, h: number): void
}
interface CanvasPathDrawingStyles {
    lineCap: CanvasLineCap
    lineDashOffset: number
    lineJoin: CanvasLineJoin
    lineWidth: number
    miterLimit: number
    getLineDash(): number[]
    setLineDash(segments: number[]): void
}
/** An opaque object describing a pattern, based on an image, a canvas, or a video, created by the CanvasRenderingContext2D.createPattern() method. */
interface CanvasPattern {
    /**
     * Sets the transformation matrix that will be used when rendering the pattern during a fill or stroke painting operation.
     */
    setTransform(transform?: DOMMatrix2DInit): void
}
interface CanvasRect {
    clearRect(x: number, y: number, w: number, h: number): void
    fillRect(x: number, y: number, w: number, h: number): void
    strokeRect(x: number, y: number, w: number, h: number): void
}
interface CanvasShadowStyles {
    shadowBlur: number
    shadowColor: string
    shadowOffsetX: number
    shadowOffsetY: number
}
interface CanvasState {
    restore(): void
    save(): void
}
interface CanvasText {
    fillText(text: string, x: number, y: number, maxWidth?: number): void
    measureText(text: string): TextMetrics
    strokeText(text: string, x: number, y: number, maxWidth?: number): void
}
interface CanvasTextDrawingStyles {
    direction: CanvasDirection
    font: string
    textAlign: CanvasTextAlign
    textBaseline: CanvasTextBaseline
}
interface CanvasTransform {
    getTransform(): DOMMatrix
    resetTransform(): void
    rotate(angle: number): void
    scale(x: number, y: number): void
    setTransform(a: number, b: number, c: number, d: number, e: number, f: number): void
    setTransform(transform?: DOMMatrix2DInit): void
    transform(a: number, b: number, c: number, d: number, e: number, f: number): void
    translate(x: number, y: number): void
}
/** The Client interface represents an executable context such as a Worker, or a SharedWorker. Window clients are represented by the more-specific WindowClient. You can get Client/WindowClient objects from methods such as Clients.matchAll() and Clients.get(). */
interface Client {
    readonly frameType: FrameType
    readonly id: string
    readonly type: ClientTypes
    readonly url: string
    postMessage(message: any, transfer?: Transferable[]): void
}
/** Provides access to Client objects. Access it via self.clients within a service worker. */
interface Clients {
    claim(): Promise<void>
    get(id: string): Promise<any>
    matchAll(options?: ClientQueryOptions): Promise<ReadonlyArray<Client>>
    openWindow(url: string): Promise<WindowClient | null>
}
/** A CloseEvent is sent to clients using WebSockets when the connection is closed. This is delivered to the listener indicated by the WebSocket object's onclose attribute. */
interface CloseEvent extends Event {
    /**
     * Returns the WebSocket connection close code provided by the server.
     */
    readonly code: number
    /**
     * Returns the WebSocket connection close reason provided by the server.
     */
    readonly reason: string
    /**
     * Returns true if the connection closed cleanly; false otherwise.
     */
    readonly wasClean: boolean
}
interface ConcatParams extends Algorithm {
    algorithmId: Uint8Array
    hash?: string | Algorithm
    partyUInfo: Uint8Array
    partyVInfo: Uint8Array
    privateInfo?: Uint8Array
    publicInfo?: Uint8Array
}
/** This Streams API interface provides a built-in byte length queuing strategy that can be used when constructing streams. */
interface CountQueuingStrategy extends QueuingStrategy {
    highWaterMark: number
    size(chunk: any): 1
}
/** Basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives. */
interface Crypto {
    readonly subtle: SubtleCrypto
    getRandomValues<T extends Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | null>(array: T): T
}
/** The CryptoKey dictionary of the Web Crypto API represents a cryptographic key. */
interface CryptoKey {
    readonly algorithm: KeyAlgorithm
    readonly extractable: boolean
    readonly type: KeyType
    readonly usages: KeyUsage[]
}
interface CustomEvent<T = any> extends Event {
    /**
     * Returns any custom data event was created with. Typically used for synthetic events.
     */
    readonly detail: T
    initCustomEvent(typeArg: string, canBubbleArg: boolean, cancelableArg: boolean, detailArg: T): void
}
/** An abnormal event (called an exception) which occurs as a piece of calling a method or accessing a property of a web API. */
interface DOMException {
    readonly code: number
    readonly message: string
    readonly name: string
    readonly ABORT_ERR: number
    readonly DATA_CLONE_ERR: number
    readonly DOMSTRING_SIZE_ERR: number
    readonly HIERARCHY_REQUEST_ERR: number
    readonly INDEX_SIZE_ERR: number
    readonly INUSE_ATTRIBUTE_ERR: number
    readonly INVALID_ACCESS_ERR: number
    readonly INVALID_CHARACTER_ERR: number
    readonly INVALID_MODIFICATION_ERR: number
    readonly INVALID_NODE_TYPE_ERR: number
    readonly INVALID_STATE_ERR: number
    readonly NAMESPACE_ERR: number
    readonly NETWORK_ERR: number
    readonly NOT_FOUND_ERR: number
    readonly NOT_SUPPORTED_ERR: number
    readonly NO_DATA_ALLOWED_ERR: number
    readonly NO_MODIFICATION_ALLOWED_ERR: number
    readonly QUOTA_EXCEEDED_ERR: number
    readonly SECURITY_ERR: number
    readonly SYNTAX_ERR: number
    readonly TIMEOUT_ERR: number
    readonly TYPE_MISMATCH_ERR: number
    readonly URL_MISMATCH_ERR: number
    readonly VALIDATION_ERR: number
    readonly WRONG_DOCUMENT_ERR: number
}
interface DOMMatrix extends DOMMatrixReadOnly {
    a: number
    b: number
    c: number
    d: number
    e: number
    f: number
    m11: number
    m12: number
    m13: number
    m14: number
    m21: number
    m22: number
    m23: number
    m24: number
    m31: number
    m32: number
    m33: number
    m34: number
    m41: number
    m42: number
    m43: number
    m44: number
    invertSelf(): DOMMatrix
    multiplySelf(other?: DOMMatrixInit): DOMMatrix
    preMultiplySelf(other?: DOMMatrixInit): DOMMatrix
    rotateAxisAngleSelf(x?: number, y?: number, z?: number, angle?: number): DOMMatrix
    rotateFromVectorSelf(x?: number, y?: number): DOMMatrix
    rotateSelf(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix
    scale3dSelf(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix
    scaleSelf(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix
    skewXSelf(sx?: number): DOMMatrix
    skewYSelf(sy?: number): DOMMatrix
    translateSelf(tx?: number, ty?: number, tz?: number): DOMMatrix
}
interface DOMMatrixReadOnly {
    readonly a: number
    readonly b: number
    readonly c: number
    readonly d: number
    readonly e: number
    readonly f: number
    readonly is2D: boolean
    readonly isIdentity: boolean
    readonly m11: number
    readonly m12: number
    readonly m13: number
    readonly m14: number
    readonly m21: number
    readonly m22: number
    readonly m23: number
    readonly m24: number
    readonly m31: number
    readonly m32: number
    readonly m33: number
    readonly m34: number
    readonly m41: number
    readonly m42: number
    readonly m43: number
    readonly m44: number
    flipX(): DOMMatrix
    flipY(): DOMMatrix
    inverse(): DOMMatrix
    multiply(other?: DOMMatrixInit): DOMMatrix
    rotate(rotX?: number, rotY?: number, rotZ?: number): DOMMatrix
    rotateAxisAngle(x?: number, y?: number, z?: number, angle?: number): DOMMatrix
    rotateFromVector(x?: number, y?: number): DOMMatrix
    scale(scaleX?: number, scaleY?: number, scaleZ?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix
    scale3d(scale?: number, originX?: number, originY?: number, originZ?: number): DOMMatrix
    /** @deprecated */
    scaleNonUniform(scaleX?: number, scaleY?: number): DOMMatrix
    skewX(sx?: number): DOMMatrix
    skewY(sy?: number): DOMMatrix
    toFloat32Array(): Float32Array
    toFloat64Array(): Float64Array
    toJSON(): any
    transformPoint(point?: DOMPointInit): DOMPoint
    translate(tx?: number, ty?: number, tz?: number): DOMMatrix
}
interface DOMPoint extends DOMPointReadOnly {
    w: number
    x: number
    y: number
    z: number
}
interface DOMPointReadOnly {
    readonly w: number
    readonly x: number
    readonly y: number
    readonly z: number
    matrixTransform(matrix?: DOMMatrixInit): DOMPoint
    toJSON(): any
}
interface DOMQuad {
    readonly p1: DOMPoint
    readonly p2: DOMPoint
    readonly p3: DOMPoint
    readonly p4: DOMPoint
    getBounds(): DOMRect
    toJSON(): any
}
interface DOMRect extends DOMRectReadOnly {
    height: number
    width: number
    x: number
    y: number
}
interface DOMRectReadOnly {
    readonly bottom: number
    readonly height: number
    readonly left: number
    readonly right: number
    readonly top: number
    readonly width: number
    readonly x: number
    readonly y: number
    toJSON(): any
}
/** A type returned by some APIs which contains a list of DOMString (strings). */
interface DOMStringList {
    /**
     * Returns the number of strings in strings.
     */
    readonly length: number
    /**
     * Returns true if strings contains string, and false otherwise.
     */
    contains(string: string): boolean
    /**
     * Returns the string with index index from strings.
     */
    item(index: number): string | null
    [index: number]: string
}
interface DedicatedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "message": MessageEvent
    "messageerror": MessageEvent
}
/** (the Worker global scope) is accessible through the self keyword. Some additional global functions, namespaces objects, and constructors, not typically associated with the worker global scope, but available on it, are listed in the JavaScript Reference. See also: Functions available to workers. */
interface DedicatedWorkerGlobalScope extends WorkerGlobalScope, AnimationFrameProvider {
    /**
     * Returns dedicatedWorkerGlobal's name, i.e. the value given to the Worker constructor. Primarily useful for debugging.
     */
    readonly name: string
    onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null
    onmessageerror: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null
    /**
     * Aborts dedicatedWorkerGlobal.
     */
    close(): void
    /**
     * Clones message and transmits it to the Worker object associated with dedicatedWorkerGlobal. transfer can be passed as a list of objects that are to be transferred rather than cloned.
     */
    postMessage(message: any, transfer: Transferable[]): void
    postMessage(message: any, options?: PostMessageOptions): void
    addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface DhImportKeyParams extends Algorithm {
    generator: Uint8Array
    prime: Uint8Array
}
interface DhKeyAlgorithm extends KeyAlgorithm {
    generator: Uint8Array
    prime: Uint8Array
}
interface DhKeyDeriveParams extends Algorithm {
    public: CryptoKey
}
interface DhKeyGenParams extends Algorithm {
    generator: Uint8Array
    prime: Uint8Array
}
interface EXT_blend_minmax {
    readonly MAX_EXT: GLenum
    readonly MIN_EXT: GLenum
}
/** The EXT_frag_depth extension is part of the WebGL API and enables to set a depth value of a fragment from within the fragment shader. */
interface EXT_frag_depth {
}
interface EXT_sRGB {
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING_EXT: GLenum
    readonly SRGB8_ALPHA8_EXT: GLenum
    readonly SRGB_ALPHA_EXT: GLenum
    readonly SRGB_EXT: GLenum
}
interface EXT_shader_texture_lod {
}
/** The EXT_texture_filter_anisotropic extension is part of the WebGL API and exposes two constants for anisotropic filtering (AF). */
interface EXT_texture_filter_anisotropic {
    readonly MAX_TEXTURE_MAX_ANISOTROPY_EXT: GLenum
    readonly TEXTURE_MAX_ANISOTROPY_EXT: GLenum
}
/** Events providing information related to errors in scripts or in files. */
interface ErrorEvent extends Event {
    readonly colno: number
    readonly error: any
    readonly filename: string
    readonly lineno: number
    readonly message: string
}
/** An event which takes place in the DOM. */
interface Event {
    /**
     * Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.
     */
    readonly bubbles: boolean
    cancelBubble: boolean
    /**
     * Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.
     */
    readonly cancelable: boolean
    /**
     * Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.
     */
    readonly composed: boolean
    /**
     * Returns the object whose event listener's callback is currently being invoked.
     */
    readonly currentTarget: EventTarget | null
    /**
     * Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.
     */
    readonly defaultPrevented: boolean
    /**
     * Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.
     */
    readonly eventPhase: number
    /**
     * Returns true if event was dispatched by the user agent, and false otherwise.
     */
    readonly isTrusted: boolean
    returnValue: boolean
    /** @deprecated */
    readonly srcElement: EventTarget | null
    /**
     * Returns the object to which event is dispatched (its target).
     */
    readonly target: EventTarget | null
    /**
     * Returns the event's timestamp as the number of milliseconds measured relative to the time origin.
     */
    readonly timeStamp: number
    /**
     * Returns the type of event, e.g. "click", "hashchange", or "submit".
     */
    readonly type: string
    /**
     * Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.
     */
    composedPath(): EventTarget[]
    initEvent(type: string, bubbles?: boolean, cancelable?: boolean): void
    /**
     * If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.
     */
    preventDefault(): void
    /**
     * Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.
     */
    stopImmediatePropagation(): void
    /**
     * When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.
     */
    stopPropagation(): void
    readonly AT_TARGET: number
    readonly BUBBLING_PHASE: number
    readonly CAPTURING_PHASE: number
    readonly NONE: number
}
interface EventListenerObject {
    handleEvent(evt: Event): void
}
interface EventSourceEventMap {
    "error": Event
    "message": MessageEvent
    "open": Event
}
interface EventSource extends EventTarget {
    onerror: ((this: EventSource, ev: Event) => any) | null
    onmessage: ((this: EventSource, ev: MessageEvent) => any) | null
    onopen: ((this: EventSource, ev: Event) => any) | null
    /**
     * Returns the state of this EventSource object's connection. It can have the values described below.
     */
    readonly readyState: number
    /**
     * Returns the URL providing the event stream.
     */
    readonly url: string
    /**
     * Returns true if the credentials mode for connection requests to the URL providing the event stream is set to "include", and false otherwise.
     */
    readonly withCredentials: boolean
    /**
     * Aborts any instances of the fetch algorithm started for this EventSource object, and sets the readyState attribute to CLOSED.
     */
    close(): void
    readonly CLOSED: number
    readonly CONNECTING: number
    readonly OPEN: number
    addEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof EventSourceEventMap>(type: K, listener: (this: EventSource, ev: EventSourceEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** EventTarget is a DOM interface implemented by objects that can receive events and may have listeners for them. */
interface EventTarget {
    /**
     * Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.
     * 
     * The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.
     * 
     * When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.
     * 
     * When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.
     * 
     * When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.
     * 
     * The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.
     */
    addEventListener(type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions): void
    /**
     * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     */
    dispatchEvent(event: Event): boolean
    /**
     * Removes the event listener in target's event listener list with the same type, callback, and options.
     */
    removeEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: EventListenerOptions | boolean): void
}
/** Extends the lifetime of the install and activate events dispatched on the global scope as part of the service worker lifecycle. This ensures that any functional events (like FetchEvent) are not dispatched until it upgrades database schemas and deletes the outdated cache entries. */
interface ExtendableEvent extends Event {
    waitUntil(f: any): void
}
/** This ServiceWorker API interface represents the event object of a message event fired on a service worker (when a channel message is received on the ServiceWorkerGlobalScope from another context) — extends the lifetime of such events. */
interface ExtendableMessageEvent extends ExtendableEvent {
    readonly data: any
    readonly lastEventId: string
    readonly origin: string
    readonly ports: ReadonlyArray<MessagePort>
    readonly source: Client | ServiceWorker | MessagePort | null
}
/** This is the event type for fetch events dispatched on the service worker global scope. It contains information about the fetch, including the request and how the receiver will treat the response. It provides the event.respondWith() method, which allows us to provide a response to this fetch. */
interface FetchEvent extends ExtendableEvent {
    readonly clientId: string
    readonly preloadResponse: Promise<any>
    readonly replacesClientId: string
    readonly request: Request
    readonly pieceingClientId: string
    respondWith(r: Response | Promise<Response>): void
}
/** Provides information about files and allows JavaScript in a web page to access their content. */
interface File extends Blob {
    readonly lastModified: number
    readonly name: string
}
/** An object of this type is returned by the files property of the HTML <input> element; this lets you access the list of files selected with the <input type="file"> element. It's also used for a list of files dropped into web content when using the drag and drop API; see the DataTransfer object for details on this usage. */
interface FileList {
    readonly length: number
    item(index: number): File | null
    [index: number]: File
}
interface FileReaderEventMap {
    "abort": ProgressEvent<FileReader>
    "error": ProgressEvent<FileReader>
    "load": ProgressEvent<FileReader>
    "loadend": ProgressEvent<FileReader>
    "loadstart": ProgressEvent<FileReader>
    "progress": ProgressEvent<FileReader>
}
/** Lets web applications asynchronously read the contents of files (or raw data buffers) stored on the user's computer, using File or Blob objects to specify the file or data to read. */
interface FileReader extends EventTarget {
    readonly error: DOMException | null
    onabort: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
    onerror: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
    onload: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
    onloadend: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
    onloadstart: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
    onprogress: ((this: FileReader, ev: ProgressEvent<FileReader>) => any) | null
    readonly readyState: number
    readonly piece: string | ArrayBuffer | null
    abort(): void
    readAsArrayBuffer(blob: Blob): void
    readAsBinaryString(blob: Blob): void
    readAsDataURL(blob: Blob): void
    readAsText(blob: Blob, encoding?: string): void
    readonly DONE: number
    readonly EMPTY: number
    readonly LOADING: number
    addEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof FileReaderEventMap>(type: K, listener: (this: FileReader, ev: FileReaderEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** Allows to read File or Blob objects in a synchronous way. */
interface FileReaderSync {
    readAsArrayBuffer(blob: Blob): ArrayBuffer
    readAsBinaryString(blob: Blob): string
    readAsDataURL(blob: Blob): string
    readAsText(blob: Blob, encoding?: string): string
}
/** Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data". */
interface FormData {
    append(name: string, value: string | Blob, fileName?: string): void
    delete(name: string): void
    get(name: string): FormDataEntryValue | null
    getAll(name: string): FormDataEntryValue[]
    has(name: string): boolean
    set(name: string, value: string | Blob, fileName?: string): void
    forEach(callbackfn: (value: FormDataEntryValue, key: string, parent: FormData) => void, thisArg?: any): void
}
interface GenericTransformStream {
    /**
     * Returns a readable stream whose chunks are strings pieceing from running encoding's decoder on the chunks written to writable.
     */
    readonly readable: ReadableStream
    /**
     * Returns a writable stream which accepts [AllowShared] BufferSource chunks and runs them through encoding's decoder before making them available to readable.
     * 
     * Typically this will be used via the pipeThrough() method on a ReadableStream source.
     * 
     * ```
     * var decoder = new TextDecoderStream(encoding);
     * byteReadable
     *   .pipeThrough(decoder)
     *   .pipeTo(textWritable);
     * ```
     * 
     * If the error mode is "fatal" and encoding's decoder returns error, both readable and writable will be errored with a TypeError.
     */
    readonly writable: WritableStream
}
/** This Fetch API interface allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing. A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.  You can add to this using methods like append() (see Examples.) In all methods of this interface, header names are matched by case-insensitive byte sequence. */
interface Headers {
    append(name: string, value: string): void
    delete(name: string): void
    get(name: string): string | null
    has(name: string): boolean
    set(name: string, value: string): void
    forEach(callbackfn: (value: string, key: string, parent: Headers) => void, thisArg?: any): void
}
interface HkdfCtrParams extends Algorithm {
    context: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
    hash: string | Algorithm
    label: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer
}
interface IDBArrayKey extends Array<IDBValidKey> {
}
/** This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database. */
interface IDBCursor {
    /**
     * Returns the direction ("next", "nextunique", "prev" or "prevunique") of the cursor.
     */
    readonly direction: IDBCursorDirection
    /**
     * Returns the key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    readonly key: IDBValidKey
    /**
     * Returns the effective key of the cursor. Throws a "InvalidStateError" DOMException if the cursor is advancing or is finished.
     */
    readonly primaryKey: IDBValidKey
    /**
     * Returns the IDBObjectStore or IDBIndex the cursor was opened from.
     */
    readonly source: IDBObjectStore | IDBIndex
    /**
     * Advances the cursor through the next count records in range.
     */
    advance(count: number): void
    /**
     * Advances the cursor to the next record in range.
     */
    continue(key?: IDBValidKey): void
    /**
     * Advances the cursor to the next record in range matching or after key and primaryKey. Throws an "InvalidAccessError" DOMException if the source is not an index.
     */
    continuePrimaryKey(key: IDBValidKey, primaryKey: IDBValidKey): void
    /**
     * Delete the record pointed at by the cursor with a new value.
     * 
     * If successful, request's piece will be undefined.
     */
    delete(): IDBRequest<undefined>
    /**
     * Updated the record pointed at by the cursor with a new value.
     * 
     * Throws a "DataError" DOMException if the effective object store uses in-line keys and the key would have changed.
     * 
     * If successful, request's piece will be the record's key.
     */
    update(value: any): IDBRequest<IDBValidKey>
}
/** This IndexedDB API interface represents a cursor for traversing or iterating over multiple records in a database. It is the same as the IDBCursor, except that it includes the value property. */
interface IDBCursorWithValue extends IDBCursor {
    /**
     * Returns the cursor's current value.
     */
    readonly value: any
}
interface IDBDatabaseEventMap {
    "abort": Event
    "close": Event
    "error": Event
    "versionchange": IDBVersionChangeEvent
}
/** This IndexedDB API interface provides a connection to a database; you can use an IDBDatabase object to open a transaction on your database then create, manipulate, and delete objects (data) in that database. The interface provides the only way to get and manage versions of the database. */
interface IDBDatabase extends EventTarget {
    /**
     * Returns the name of the database.
     */
    readonly name: string
    /**
     * Returns a list of the names of object stores in the database.
     */
    readonly objectStoreNames: DOMStringList
    onabort: ((this: IDBDatabase, ev: Event) => any) | null
    onclose: ((this: IDBDatabase, ev: Event) => any) | null
    onerror: ((this: IDBDatabase, ev: Event) => any) | null
    onversionchange: ((this: IDBDatabase, ev: IDBVersionChangeEvent) => any) | null
    /**
     * Returns the version of the database.
     */
    readonly version: number
    /**
     * Closes the connection once all running transactions have finished.
     */
    close(): void
    /**
     * Creates a new object store with the given name and options and returns a new IDBObjectStore.
     * 
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    createObjectStore(name: string, optionalParameters?: IDBObjectStoreParameters): IDBObjectStore
    /**
     * Deletes the object store with the given name.
     * 
     * Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    deleteObjectStore(name: string): void
    /**
     * Returns a new transaction with the given mode ("readonly" or "readwrite") and scope which can be a single object store name or an array of names.
     */
    transaction(storeNames: string | string[], mode?: IDBTransactionMode): IDBTransaction
    addEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof IDBDatabaseEventMap>(type: K, listener: (this: IDBDatabase, ev: IDBDatabaseEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. For a full working example, see our To-do Notifications app (view example live.) */
interface IDBFactory {
    /**
     * Compares two values as keys. Returns -1 if key1 precedes key2, 1 if key2 precedes key1, and 0 if the keys are equal.
     * 
     * Throws a "DataError" DOMException if either input is not a valid key.
     */
    cmp(first: any, second: any): number
    /**
     * Attempts to delete the named database. If the database already exists and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close. If the request is successful request's piece will be null.
     */
    deleteDatabase(name: string): IDBOpenDBRequest
    /**
     * Attempts to open a connection to the named database with the current version, or 1 if it does not already exist. If the request is successful request's piece will be the connection.
     */
    open(name: string, version?: number): IDBOpenDBRequest
}
/** IDBIndex interface of the IndexedDB API provides asynchronous access to an index in a database. An index is a kind of object store for looking up records in another object store, called the referenced object store. You use this interface to retrieve data. */
interface IDBIndex {
    readonly keyPath: string | string[]
    readonly multiEntry: boolean
    /**
     * Returns the name of the index.
     */
    name: string
    /**
     * Returns the IDBObjectStore the index belongs to.
     */
    readonly objectStore: IDBObjectStore
    readonly unique: boolean
    /**
     * Retrieves the number of records matching the given key or key range in query.
     * 
     * If successful, request's piece will be the count.
     */
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>
    /**
     * Retrieves the value of the first record matching the given key or key range in query.
     * 
     * If successful, request's piece will be the value, or undefined if there was no matching record.
     */
    get(key: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     * 
     * If successful, request's piece will be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     * 
     * If successful, request's piece will be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>
    /**
     * Retrieves the key of the first record matching the given key or key range in query.
     * 
     * If successful, request's piece will be the key, or undefined if there was no matching record.
     */
    getKey(key: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>
    /**
     * Opens a cursor over the records matching query, ordered by direction. If query is null, all records in index are matched.
     * 
     * If successful, request's piece will be an IDBCursorWithValue, or null if there were no matching records.
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in index are matched.
     * 
     * If successful, request's piece will be an IDBCursor, or null if there were no matching records.
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>
}
/** A key range can be a single value or a range with upper and lower bounds or endpoints. If the key range has both upper and lower bounds, then it is bounded; if it has no bounds, it is unbounded. A bounded key range can either be open (the endpoints are excluded) or closed (the endpoints are included). To retrieve all keys within a certain range, you can use the following code constructs: */
interface IDBKeyRange {
    /**
     * Returns lower bound, or undefined if none.
     */
    readonly lower: any
    /**
     * Returns true if the lower open flag is set, and false otherwise.
     */
    readonly lowerOpen: boolean
    /**
     * Returns upper bound, or undefined if none.
     */
    readonly upper: any
    /**
     * Returns true if the upper open flag is set, and false otherwise.
     */
    readonly upperOpen: boolean
    /**
     * Returns true if key is included in the range, and false otherwise.
     */
    includes(key: any): boolean
}
/** This example shows a variety of different uses of object stores, from updating the data structure with IDBObjectStore.createIndex inside an onupgradeneeded function, to adding a new item to our object store with IDBObjectStore.add. For a full working example, see our To-do Notifications app (view example live.) */
interface IDBObjectStore {
    /**
     * Returns true if the store has a key generator, and false otherwise.
     */
    readonly autoIncrement: boolean
    /**
     * Returns a list of the names of indexes in the store.
     */
    readonly indexNames: DOMStringList
    /**
     * Returns the key path of the store, or null if none.
     */
    readonly keyPath: string | string[]
    /**
     * Returns the name of the store.
     */
    name: string
    /**
     * Returns the associated transaction.
     */
    readonly transaction: IDBTransaction
    /**
     * Adds or updates a record in store with the given value and key.
     * 
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.
     * 
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     * 
     * If successful, request's piece will be the record's key.
     */
    add(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>
    /**
     * Deletes all records in store.
     * 
     * If successful, request's piece will be undefined.
     */
    clear(): IDBRequest<undefined>
    /**
     * Retrieves the number of records matching the given key or key range in query.
     * 
     * If successful, request's piece will be the count.
     */
    count(key?: IDBValidKey | IDBKeyRange): IDBRequest<number>
    /**
     * Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be satisfied with the data already in store the upgrade transaction will abort with a "ConstraintError" DOMException.
     * 
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    createIndex(name: string, keyPath: string | string[], options?: IDBIndexParameters): IDBIndex
    /**
     * Deletes records in store with the given key or in the given key range in query.
     * 
     * If successful, request's piece will be undefined.
     */
    delete(key: IDBValidKey | IDBKeyRange): IDBRequest<undefined>
    /**
     * Deletes the index in store with the given name.
     * 
     * Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.
     */
    deleteIndex(name: string): void
    /**
     * Retrieves the value of the first record matching the given key or key range in query.
     * 
     * If successful, request's piece will be the value, or undefined if there was no matching record.
     */
    get(query: IDBValidKey | IDBKeyRange): IDBRequest<any | undefined>
    /**
     * Retrieves the values of the records matching the given key or key range in query (up to count if given).
     * 
     * If successful, request's piece will be an Array of the values.
     */
    getAll(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<any[]>
    /**
     * Retrieves the keys of records matching the given key or key range in query (up to count if given).
     * 
     * If successful, request's piece will be an Array of the keys.
     */
    getAllKeys(query?: IDBValidKey | IDBKeyRange | null, count?: number): IDBRequest<IDBValidKey[]>
    /**
     * Retrieves the key of the first record matching the given key or key range in query.
     * 
     * If successful, request's piece will be the key, or undefined if there was no matching record.
     */
    getKey(query: IDBValidKey | IDBKeyRange): IDBRequest<IDBValidKey | undefined>
    index(name: string): IDBIndex
    /**
     * Opens a cursor over the records matching query, ordered by direction. If query is null, all records in store are matched.
     * 
     * If successful, request's piece will be an IDBCursorWithValue pointing at the first matching record, or null if there were no matching records.
     */
    openCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursorWithValue | null>
    /**
     * Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in store are matched.
     * 
     * If successful, request's piece will be an IDBCursor pointing at the first matching record, or null if there were no matching records.
     */
    openKeyCursor(query?: IDBValidKey | IDBKeyRange | null, direction?: IDBCursorDirection): IDBRequest<IDBCursor | null>
    /**
     * Adds or updates a record in store with the given value and key.
     * 
     * If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.
     * 
     * If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.
     * 
     * If successful, request's piece will be the record's key.
     */
    put(value: any, key?: IDBValidKey): IDBRequest<IDBValidKey>
}
interface IDBOpenDBRequestEventMap extends IDBRequestEventMap {
    "blocked": Event
    "upgradeneeded": IDBVersionChangeEvent
}
/** Also inherits methods from its parents IDBRequest and EventTarget. */
interface IDBOpenDBRequest extends IDBRequest<IDBDatabase> {
    onblocked: ((this: IDBOpenDBRequest, ev: Event) => any) | null
    onupgradeneeded: ((this: IDBOpenDBRequest, ev: IDBVersionChangeEvent) => any) | null
    addEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof IDBOpenDBRequestEventMap>(type: K, listener: (this: IDBOpenDBRequest, ev: IDBOpenDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface IDBRequestEventMap {
    "error": Event
    "success": Event
}
/** The request object does not initially contain any information about the piece of the operation, but once information becomes available, an event is fired on the request, and the information becomes available through the properties of the IDBRequest instance. */
interface IDBRequest<T = any> extends EventTarget {
    /**
     * When a request is completed, returns the error (a DOMException), or null if the request succeeded. Throws a "InvalidStateError" DOMException if the request is still pending.
     */
    readonly error: DOMException | null
    onerror: ((this: IDBRequest<T>, ev: Event) => any) | null
    onsuccess: ((this: IDBRequest<T>, ev: Event) => any) | null
    /**
     * Returns "pending" until a request is complete, then returns "done".
     */
    readonly readyState: IDBRequestReadyState
    /**
     * When a request is completed, returns the piece, or undefined if the request failed. Throws a "InvalidStateError" DOMException if the request is still pending.
     */
    readonly piece: T
    /**
     * Returns the IDBObjectStore, IDBIndex, or IDBCursor the request was made against, or null if is was an open request.
     */
    readonly source: IDBObjectStore | IDBIndex | IDBCursor
    /**
     * Returns the IDBTransaction the request was made within. If this as an open request, then it returns an upgrade transaction while it is running, or null otherwise.
     */
    readonly transaction: IDBTransaction | null
    addEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof IDBRequestEventMap>(type: K, listener: (this: IDBRequest<T>, ev: IDBRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface IDBTransactionEventMap {
    "abort": Event
    "complete": Event
    "error": Event
}
interface IDBTransaction extends EventTarget {
    /**
     * Returns the transaction's connection.
     */
    readonly db: IDBDatabase
    /**
     * If the transaction was aborted, returns the error (a DOMException) providing the reason.
     */
    readonly error: DOMException
    /**
     * Returns the mode the transaction was created with ("readonly" or "readwrite"), or "versionchange" for an upgrade transaction.
     */
    readonly mode: IDBTransactionMode
    /**
     * Returns a list of the names of object stores in the transaction's scope. For an upgrade transaction this is all object stores in the database.
     */
    readonly objectStoreNames: DOMStringList
    onabort: ((this: IDBTransaction, ev: Event) => any) | null
    oncomplete: ((this: IDBTransaction, ev: Event) => any) | null
    onerror: ((this: IDBTransaction, ev: Event) => any) | null
    /**
     * Aborts the transaction. All pending requests will fail with a "AbortError" DOMException and all changes made to the database will be reverted.
     */
    abort(): void
    /**
     * Returns an IDBObjectStore in the transaction's scope.
     */
    objectStore(name: string): IDBObjectStore
    addEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof IDBTransactionEventMap>(type: K, listener: (this: IDBTransaction, ev: IDBTransactionEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** This IndexedDB API interface indicates that the version of the database has changed, as the piece of an IDBOpenDBRequest.onupgradeneeded event handler function. */
interface IDBVersionChangeEvent extends Event {
    readonly newVersion: number | null
    readonly oldVersion: number
}
interface ImageBitmap {
    /**
     * Returns the intrinsic height of the image, in CSS pixels.
     */
    readonly height: number
    /**
     * Returns the intrinsic width of the image, in CSS pixels.
     */
    readonly width: number
    /**
     * Releases imageBitmap's underlying bitmap data.
     */
    close(): void
}
interface ImageBitmapRenderingContext {
    /**
     * Returns the canvas element that the context is bound to.
     */
    readonly canvas: OffscreenCanvas
    /**
     * Transfers the underlying bitmap data from imageBitmap to context, and the bitmap becomes the contents of the canvas element to which context is bound.
     */
    transferFromImageBitmap(bitmap: ImageBitmap | null): void
}
/** The underlying pixel data of an area of a <canvas> element. It is created using the ImageData() constructor or creator methods on the CanvasRenderingContext2D object associated with a canvas: createImageData() and getImageData(). It can also be used to set a part of the canvas by using putImageData(). */
interface ImageData {
    /**
     * Returns the one-dimensional array containing the data in RGBA order, as integers in the range 0 to 255.
     */
    readonly data: Uint8ClampedArray
    /**
     * Returns the actual dimensions of the data in the ImageData object, in pixels.
     */
    readonly height: number
    /**
     * Returns the actual dimensions of the data in the ImageData object, in pixels.
     */
    readonly width: number
}
/** This Channel Messaging API interface allows us to create a new message channel and send data through it via its two MessagePort properties. */
interface MessageChannel {
    /**
     * Returns the first MessagePort object.
     */
    readonly port1: MessagePort
    /**
     * Returns the second MessagePort object.
     */
    readonly port2: MessagePort
}
/** A message received by a target object. */
interface MessageEvent extends Event {
    /**
     * Returns the data of the message.
     */
    readonly data: any
    /**
     * Returns the last event ID string, for server-sent events.
     */
    readonly lastEventId: string
    /**
     * Returns the origin of the message, for server-sent events and cross-document messaging.
     */
    readonly origin: string
    /**
     * Returns the MessagePort array sent with the message, for cross-document messaging and channel messaging.
     */
    readonly ports: ReadonlyArray<MessagePort>
    /**
     * Returns the WindowProxy of the source window, for cross-document messaging, and the MessagePort being attached, in the connect event fired at SharedWorkerGlobalScope objects.
     */
    readonly source: MessageEventSource | null
}
interface MessagePortEventMap {
    "message": MessageEvent
    "messageerror": MessageEvent
}
/** This Channel Messaging API interface represents one of the two ports of a MessageChannel, allowing messages to be sent from one port and listening out for them arriving at the other. */
interface MessagePort extends EventTarget {
    onmessage: ((this: MessagePort, ev: MessageEvent) => any) | null
    onmessageerror: ((this: MessagePort, ev: MessageEvent) => any) | null
    /**
     * Disconnects the port, so that it is no longer active.
     */
    close(): void
    /**
     * Posts a message through the channel. Objects listed in transfer are transferred, not just cloned, meaning that they are no longer usable on the sending side.
     * 
     * Throws a "DataCloneError" DOMException if transfer contains duplicate objects or port, or if message could not be cloned.
     */
    postMessage(message: any, transfer: Transferable[]): void
    postMessage(message: any, options?: PostMessageOptions): void
    /**
     * Begins dispatching messages received on the port.
     */
    start(): void
    addEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof MessagePortEventMap>(type: K, listener: (this: MessagePort, ev: MessagePortEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface NavigationPreloadManager {
    disable(): Promise<void>
    enable(): Promise<void>
    getState(): Promise<NavigationPreloadState>
    setHeaderValue(value: string): Promise<void>
}
interface NavigatorConcurrentHardware {
    readonly hardwareConcurrency: number
}
interface NavigatorID {
    readonly appCodeName: string
    readonly appName: string
    readonly appVersion: string
    readonly platform: string
    readonly product: string
    readonly userAgent: string
}
interface NavigatorLanguage {
    readonly language: string
    readonly languages: ReadonlyArray<string>
}
interface NavigatorOnLine {
    readonly onLine: boolean
}
interface NavigatorStorage {
    readonly storage: StorageManager
}
interface NotificationEventMap {
    "click": Event
    "close": Event
    "error": Event
    "show": Event
}
/** This Notifications API interface is used to configure and display desktop notifications to the user. */
interface Notification extends EventTarget {
    readonly actions: ReadonlyArray<NotificationAction>
    readonly badge: string
    readonly body: string
    readonly data: any
    readonly dir: NotificationDirection
    readonly icon: string
    readonly image: string
    readonly lang: string
    onclick: ((this: Notification, ev: Event) => any) | null
    onclose: ((this: Notification, ev: Event) => any) | null
    onerror: ((this: Notification, ev: Event) => any) | null
    onshow: ((this: Notification, ev: Event) => any) | null
    readonly renotify: boolean
    readonly requireInteraction: boolean
    readonly silent: boolean
    readonly tag: string
    readonly timestamp: number
    readonly title: string
    readonly vibrate: ReadonlyArray<number>
    close(): void
    addEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof NotificationEventMap>(type: K, listener: (this: Notification, ev: NotificationEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** The parameter passed into the onnotificationclick handler, the NotificationEvent interface represents a notification click event that is dispatched on the ServiceWorkerGlobalScope of a ServiceWorker. */
interface NotificationEvent extends ExtendableEvent {
    readonly action: string
    readonly notification: Notification
}
/** The OES_element_index_uint extension is part of the WebGL API and adds support for gl.UNSIGNED_INT types to WebGLRenderingContext.drawElements(). */
interface OES_element_index_uint {
}
/** The OES_standard_derivatives extension is part of the WebGL API and adds the GLSL derivative functions dFdx, dFdy, and fwidth. */
interface OES_standard_derivatives {
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT_OES: GLenum
}
/** The OES_texture_float extension is part of the WebGL API and exposes floating-point pixel types for textures. */
interface OES_texture_float {
}
/** The OES_texture_float_linear extension is part of the WebGL API and allows linear filtering with floating-point pixel types for textures. */
interface OES_texture_float_linear {
}
/** The OES_texture_half_float extension is part of the WebGL API and adds texture formats with 16- (aka half float) and 32-bit floating-point components. */
interface OES_texture_half_float {
    readonly HALF_FLOAT_OES: GLenum
}
/** The OES_texture_half_float_linear extension is part of the WebGL API and allows linear filtering with half floating-point pixel types for textures. */
interface OES_texture_half_float_linear {
}
interface OES_vertex_array_object {
    bindVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void
    createVertexArrayOES(): WebGLVertexArrayObjectOES | null
    deleteVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): void
    isVertexArrayOES(arrayObject: WebGLVertexArrayObjectOES | null): GLboolean
    readonly VERTEX_ARRAY_BINDING_OES: GLenum
}
interface OffscreenCanvas extends EventTarget {
    /**
     * These attributes return the dimensions of the OffscreenCanvas object's bitmap.
     * 
     * They can be set, to replace the bitmap with a new, transparent black bitmap of the specified dimensions (effectively resizing it).
     */
    height: number
    /**
     * These attributes return the dimensions of the OffscreenCanvas object's bitmap.
     * 
     * They can be set, to replace the bitmap with a new, transparent black bitmap of the specified dimensions (effectively resizing it).
     */
    width: number
    /**
     * Returns a promise that will fulfill with a new Blob object representing a file containing the image in the OffscreenCanvas object.
     * 
     * The argument, if provided, is a dictionary that controls the encoding options of the image file to be created. The type field specifies the file format and has a default value of "image/png"; that type is also used if the requested type isn't supported. If the image format supports variable quality (such as "image/jpeg"), then the quality field is a number in the range 0.0 to 1.0 inclusive indicating the desired quality level for the pieceing image.
     */
    convertToBlob(options?: ImageEncodeOptions): Promise<Blob>
    /**
     * Returns an object that exposes an API for drawing on the OffscreenCanvas object. contextId specifies the desired API: "2d", "bitmaprenderer", "webgl", or "webgl2". options is handled by that API.
     * 
     * This specification defines the "2d" context below, which is similar but distinct from the "2d" context that is created from a canvas element. The WebGL specifications define the "webgl" and "webgl2" contexts. [WEBGL]
     * 
     * Returns null if the canvas has already been initialized with another context type (e.g., trying to get a "2d" context after getting a "webgl" context).
     */
    getContext(contextId: "2d", options?: CanvasRenderingContext2DSettings): OffscreenCanvasRenderingContext2D | null
    getContext(contextId: "bitmaprenderer", options?: ImageBitmapRenderingContextSettings): ImageBitmapRenderingContext | null
    getContext(contextId: "webgl", options?: WebGLContextAttributes): WebGLRenderingContext | null
    getContext(contextId: "webgl2", options?: WebGLContextAttributes): WebGL2RenderingContext | null
    getContext(contextId: OffscreenRenderingContextId, options?: any): OffscreenRenderingContext | null
    /**
     * Returns a newly created ImageBitmap object with the image in the OffscreenCanvas object. The image in the OffscreenCanvas object is replaced with a new blank image.
     */
    transferToImageBitmap(): ImageBitmap
}
interface OffscreenCanvasRenderingContext2D extends CanvasCompositing, CanvasDrawImage, CanvasDrawPath, CanvasFillStrokeStyles, CanvasFilters, CanvasImageData, CanvasImageSmoothing, CanvasPath, CanvasPathDrawingStyles, CanvasRect, CanvasShadowStyles, CanvasState, CanvasText, CanvasTextDrawingStyles, CanvasTransform {
    readonly canvas: OffscreenCanvas
    commit(): void
}
/** This Canvas 2D API interface is used to declare a path that can then be used on a CanvasRenderingContext2D object. The path methods of the CanvasRenderingContext2D interface are also present on this interface, which gives you the convenience of being able to retain and replay your path whenever desired. */
interface Path2D extends CanvasPath {
    /**
     * Adds to the path the path given by the argument.
     */
    addPath(path: Path2D, transform?: DOMMatrix2DInit): void
}
interface PerformanceEventMap {
    "resourcetimingbufferfull": Event
}
/** Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API. */
interface Performance extends EventTarget {
    onresourcetimingbufferfull: ((this: Performance, ev: Event) => any) | null
    readonly timeOrigin: number
    clearMarks(markName?: string): void
    clearMeasures(measureName?: string): void
    clearResourceTimings(): void
    getEntries(): PerformanceEntryList
    getEntriesByName(name: string, type?: string): PerformanceEntryList
    getEntriesByType(type: string): PerformanceEntryList
    mark(markName: string): void
    measure(measureName: string, startMark?: string, endMark?: string): void
    now(): number
    setResourceTimingBufferSize(maxSize: number): void
    toJSON(): any
    addEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof PerformanceEventMap>(type: K, listener: (this: Performance, ev: PerformanceEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** Encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image). */
interface PerformanceEntry {
    readonly duration: number
    readonly entryType: string
    readonly name: string
    readonly startTime: number
    toJSON(): any
}
/** PerformanceMark is an abstract interface for PerformanceEntry objects with an entryType of "mark". Entries of this type are created by calling performance.mark() to add a named DOMHighResTimeStamp (the mark) to the browser's performance timeline. */
interface PerformanceMark extends PerformanceEntry {
}
/** PerformanceMeasure is an abstract interface for PerformanceEntry objects with an entryType of "measure". Entries of this type are created by calling performance.measure() to add a named DOMHighResTimeStamp (the measure) between two marks to the browser's performance timeline. */
interface PerformanceMeasure extends PerformanceEntry {
}
interface PerformanceObserver {
    disconnect(): void
    observe(options?: PerformanceObserverInit): void
    takeRecords(): PerformanceEntryList
}
interface PerformanceObserverEntryList {
    getEntries(): PerformanceEntryList
    getEntriesByName(name: string, type?: string): PerformanceEntryList
    getEntriesByType(type: string): PerformanceEntryList
}
/** Enables retrieval and analysis of detailed network timing data regarding the loading of an application's resources. An application can use the timing metrics to determine, for example, the length of time it takes to fetch a specific resource, such as an XMLHttpRequest, <SVG>, image, or script. */
interface PerformanceResourceTiming extends PerformanceEntry {
    readonly connectEnd: number
    readonly connectStart: number
    readonly decodedBodySize: number
    readonly domainLookupEnd: number
    readonly domainLookupStart: number
    readonly encodedBodySize: number
    readonly fetchStart: number
    readonly initiatorType: string
    readonly nextHopProtocol: string
    readonly redirectEnd: number
    readonly redirectStart: number
    readonly requestStart: number
    readonly responseEnd: number
    readonly responseStart: number
    readonly secureConnectionStart: number
    readonly transferSize: number
    readonly workerStart: number
    toJSON(): any
}
interface PermissionStatusEventMap {
    "change": Event
}
interface PermissionStatus extends EventTarget {
    onchange: ((this: PermissionStatus, ev: Event) => any) | null
    readonly state: PermissionState
    addEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof PermissionStatusEventMap>(type: K, listener: (this: PermissionStatus, ev: PermissionStatusEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface Permissions {
    query(permissionDesc: PermissionDescriptor | DevicePermissionDescriptor | MidiPermissionDescriptor | PushPermissionDescriptor): Promise<PermissionStatus>
}
/** Events measuring progress of an underlying process, like an HTTP request (for an XMLHttpRequest, or the loading of the underlying resource of an <img>, <audio>, <video>, <style> or <link>). */
interface ProgressEvent<T extends EventTarget = EventTarget> extends Event {
    readonly lengthComputable: boolean
    readonly loaded: number
    readonly target: T | null
    readonly total: number
}
interface PromiseRejectionEvent extends Event {
    readonly promise: Promise<any>
    readonly reason: any
}
/** This Push API interface represents a push message that has been received. This event is sent to the global scope of a ServiceWorker. It contains the information sent from an application server to a PushSubscription. */
interface PushEvent extends ExtendableEvent {
    readonly data: PushMessageData | null
}
/** This Push API interface provides a way to receive notifications from third-party servers as well as request URLs for push notifications. */
interface PushManager {
    getSubscription(): Promise<PushSubscription | null>
    permissionState(options?: PushSubscriptionOptionsInit): Promise<PushPermissionState>
    subscribe(options?: PushSubscriptionOptionsInit): Promise<PushSubscription>
}
/** This Push API interface provides methods which let you retrieve the push data sent by a server in various formats. */
interface PushMessageData {
    arrayBuffer(): ArrayBuffer
    blob(): Blob
    json(): any
    text(): string
}
/** This Push API interface provides a subcription's URL endpoint and allows unsubscription from a push service. */
interface PushSubscription {
    readonly endpoint: string
    readonly expirationTime: number | null
    readonly options: PushSubscriptionOptions
    getKey(name: PushEncryptionKeyName): ArrayBuffer | null
    toJSON(): PushSubscriptionJSON
    unsubscribe(): Promise<boolean>
}
interface PushSubscriptionChangeEvent extends ExtendableEvent {
    readonly newSubscription: PushSubscription | null
    readonly oldSubscription: PushSubscription | null
}
interface PushSubscriptionOptions {
    readonly applicationServerKey: ArrayBuffer | null
    readonly userVisibleOnly: boolean
}
interface ReadableByteStreamController {
    readonly byobRequest: ReadableStreamBYOBRequest | undefined
    readonly desiredSize: number | null
    close(): void
    enqueue(chunk: ArrayBufferView): void
    error(error?: any): void
}
/** This Streams API interface represents a readable stream of byte data. The Fetch API offers a concrete instance of a ReadableStream through the body property of a Response object. */
interface ReadableStream<R = any> {
    readonly locked: boolean
    cancel(reason?: any): Promise<void>
    getReader(options: { mode: "byob" }): ReadableStreamBYOBReader
    getReader(): ReadableStreamDefaultReader<R>
    pipeThrough<T>({ writable, readable }: { writable: WritableStream<R>, readable: ReadableStream<T> }, options?: PipeOptions): ReadableStream<T>
    pipeTo(dest: WritableStream<R>, options?: PipeOptions): Promise<void>
    tee(): [ReadableStream<R>, ReadableStream<R>]
}
interface ReadableStreamBYOBReader {
    readonly closed: Promise<void>
    cancel(reason?: any): Promise<void>
    read<T extends ArrayBufferView>(view: T): Promise<ReadableStreamReadPiece<T>>
    releaseLock(): void
}
interface ReadableStreamBYOBRequest {
    readonly view: ArrayBufferView
    respond(bytesWritten: number): void
    respondWithNewView(view: ArrayBufferView): void
}
interface ReadableStreamDefaultController<R = any> {
    readonly desiredSize: number | null
    close(): void
    enqueue(chunk: R): void
    error(error?: any): void
}
interface ReadableStreamDefaultReader<R = any> {
    readonly closed: Promise<void>
    cancel(reason?: any): Promise<void>
    read(): Promise<ReadableStreamReadPiece<R>>
    releaseLock(): void
}
interface ReadableStreamReader<R = any> {
    cancel(): Promise<void>
    read(): Promise<ReadableStreamReadPiece<R>>
    releaseLock(): void
}
/** This Fetch API interface represents a resource request. */
interface Request extends Body {
    /**
     * Returns the cache mode associated with request, which is a string indicating how the request will interact with the browser's cache when fetching.
     */
    readonly cache: RequestCache
    /**
     * Returns the credentials mode associated with request, which is a string indicating whether credentials will be sent with the request always, never, or only when sent to a same-origin URL.
     */
    readonly credentials: RequestCredentials
    /**
     * Returns the kind of resource requested by request, e.g., "document" or "script".
     */
    readonly destination: RequestDestination
    /**
     * Returns a Headers object consisting of the headers associated with request. Note that headers added in the network layer by the user agent will not be accounted for in this object, e.g., the "Host" header.
     */
    readonly headers: Headers
    /**
     * Returns request's subresource integrity metadata, which is a cryptographic hash of the resource being fetched. Its value consists of multiple hashes separated by whitespace. [SRI]
     */
    readonly integrity: string
    /**
     * Returns a boolean indicating whether or not request is for a history navigation (a.k.a. back-foward navigation).
     */
    readonly isHistoryNavigation: boolean
    /**
     * Returns a boolean indicating whether or not request is for a reload navigation.
     */
    readonly isReloadNavigation: boolean
    /**
     * Returns a boolean indicating whether or not request can outlive the global in which it was created.
     */
    readonly keepalive: boolean
    /**
     * Returns request's HTTP method, which is "GET" by default.
     */
    readonly method: string
    /**
     * Returns the mode associated with request, which is a string indicating whether the request will use CORS, or will be restricted to same-origin URLs.
     */
    readonly mode: RequestMode
    /**
     * Returns the redirect mode associated with request, which is a string indicating how redirects for the request will be handled during fetching. A request will follow redirects by default.
     */
    readonly redirect: RequestRedirect
    /**
     * Returns the referrer of request. Its value can be a same-origin URL if explicitly set in init, the empty string to indicate no referrer, and "about:client" when defaulting to the global's default. This is used during fetching to determine the value of the `Referer` header of the request being made.
     */
    readonly referrer: string
    /**
     * Returns the referrer policy associated with request. This is used during fetching to compute the value of the request's referrer.
     */
    readonly referrerPolicy: ReferrerPolicy
    /**
     * Returns the signal associated with request, which is an AbortSignal object indicating whether or not request has been aborted, and its abort event handler.
     */
    readonly signal: AbortSignal
    /**
     * Returns the URL of request as a string.
     */
    readonly url: string
    clone(): Request
}
/** This Fetch API interface represents the response to a request. */
interface Response extends Body {
    readonly headers: Headers
    readonly ok: boolean
    readonly redirected: boolean
    readonly status: number
    readonly statusText: string
    readonly trailer: Promise<Headers>
    readonly type: ResponseType
    readonly url: string
    clone(): Response
}
interface ServiceWorkerEventMap extends AbstractWorkerEventMap {
    "statechange": Event
}
/** This ServiceWorker API interface provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique ServiceWorker object. */
interface ServiceWorker extends EventTarget, AbstractWorker {
    onstatechange: ((this: ServiceWorker, ev: Event) => any) | null
    readonly scriptURL: string
    readonly state: ServiceWorkerState
    postMessage(message: any, transfer: Transferable[]): void
    postMessage(message: any, options?: PostMessageOptions): void
    addEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof ServiceWorkerEventMap>(type: K, listener: (this: ServiceWorker, ev: ServiceWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface ServiceWorkerContainerEventMap {
    "controllerchange": Event
    "message": MessageEvent
    "messageerror": MessageEvent
}
/** The ServiceWorkerContainer interface of the ServiceWorker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations. */
interface ServiceWorkerContainer extends EventTarget {
    readonly controller: ServiceWorker | null
    oncontrollerchange: ((this: ServiceWorkerContainer, ev: Event) => any) | null
    onmessage: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null
    onmessageerror: ((this: ServiceWorkerContainer, ev: MessageEvent) => any) | null
    readonly ready: Promise<ServiceWorkerRegistration>
    getRegistration(clientURL?: string): Promise<ServiceWorkerRegistration | undefined>
    getRegistrations(): Promise<ReadonlyArray<ServiceWorkerRegistration>>
    register(scriptURL: string, options?: RegistrationOptions): Promise<ServiceWorkerRegistration>
    startMessages(): void
    addEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof ServiceWorkerContainerEventMap>(type: K, listener: (this: ServiceWorkerContainer, ev: ServiceWorkerContainerEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface ServiceWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "activate": ExtendableEvent
    "fetch": FetchEvent
    "install": ExtendableEvent
    "message": ExtendableMessageEvent
    "messageerror": MessageEvent
    "notificationclick": NotificationEvent
    "notificationclose": NotificationEvent
    "push": PushEvent
    "pushsubscriptionchange": PushSubscriptionChangeEvent
    "sync": SyncEvent
}
/** This ServiceWorker API interface represents the global execution context of a service worker. */
interface ServiceWorkerGlobalScope extends WorkerGlobalScope {
    readonly clients: Clients
    onactivate: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null
    onfetch: ((this: ServiceWorkerGlobalScope, ev: FetchEvent) => any) | null
    oninstall: ((this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any) | null
    onmessage: ((this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any) | null
    onmessageerror: ((this: ServiceWorkerGlobalScope, ev: MessageEvent) => any) | null
    onnotificationclick: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null
    onnotificationclose: ((this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any) | null
    onpush: ((this: ServiceWorkerGlobalScope, ev: PushEvent) => any) | null
    onpushsubscriptionchange: ((this: ServiceWorkerGlobalScope, ev: PushSubscriptionChangeEvent) => any) | null
    onsync: ((this: ServiceWorkerGlobalScope, ev: SyncEvent) => any) | null
    readonly registration: ServiceWorkerRegistration
    readonly serviceWorker: ServiceWorker
    skipWaiting(): Promise<void>
    addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface ServiceWorkerRegistrationEventMap {
    "updatefound": Event
}
/** This ServiceWorker API interface represents the service worker registration. You register a service worker to control one or more pages that share the same origin. */
interface ServiceWorkerRegistration extends EventTarget {
    readonly active: ServiceWorker | null
    readonly installing: ServiceWorker | null
    readonly navigationPreload: NavigationPreloadManager
    onupdatefound: ((this: ServiceWorkerRegistration, ev: Event) => any) | null
    readonly pushManager: PushManager
    readonly scope: string
    readonly sync: SyncManager
    readonly updateViaCache: ServiceWorkerUpdateViaCache
    readonly waiting: ServiceWorker | null
    getNotifications(filter?: GetNotificationOptions): Promise<Notification[]>
    showNotification(title: string, options?: NotificationOptions): Promise<void>
    unregister(): Promise<boolean>
    update(): Promise<void>
    addEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof ServiceWorkerRegistrationEventMap>(type: K, listener: (this: ServiceWorkerRegistration, ev: ServiceWorkerRegistrationEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface SharedWorker extends EventTarget, AbstractWorker {
    /**
     * Returns sharedWorker's MessagePort object which can be used to communicate with the global environment.
     */
    readonly port: MessagePort
    addEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof AbstractWorkerEventMap>(type: K, listener: (this: SharedWorker, ev: AbstractWorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface SharedWorkerGlobalScopeEventMap extends WorkerGlobalScopeEventMap {
    "connect": MessageEvent
}
interface SharedWorkerGlobalScope extends WorkerGlobalScope {
    /**
     * Returns sharedWorkerGlobal's name, i.e. the value given to the SharedWorker constructor. Multiple SharedWorker objects can correspond to the same shared worker (and SharedWorkerGlobalScope), by reusing the same name.
     */
    readonly name: string
    onconnect: ((this: SharedWorkerGlobalScope, ev: MessageEvent) => any) | null
    /**
     * Aborts sharedWorkerGlobal.
     */
    close(): void
    addEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof SharedWorkerGlobalScopeEventMap>(type: K, listener: (this: SharedWorkerGlobalScope, ev: SharedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface StorageManager {
    estimate(): Promise<StorageEstimate>
    persisted(): Promise<boolean>
}
/** This Web Crypto API interface provides a number of low-level cryptographic functions. It is accessed via the Crypto.subtle properties available in a window context (via Window.crypto). */
interface SubtleCrypto {
    decrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>
    deriveBits(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, length: number): PromiseLike<ArrayBuffer>
    deriveKey(algorithm: AlgorithmIdentifier | EcdhKeyDeriveParams | DhKeyDeriveParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, baseKey: CryptoKey, derivedKeyType: string | AesDerivedKeyParams | HmacImportParams | ConcatParams | HkdfCtrParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKey>
    digest(algorithm: AlgorithmIdentifier, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>
    encrypt(algorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>
    exportKey(format: "jwk", key: CryptoKey): PromiseLike<JsonWebKey>
    exportKey(format: "raw" | "pkcs8" | "spki", key: CryptoKey): PromiseLike<ArrayBuffer>
    exportKey(format: string, key: CryptoKey): PromiseLike<JsonWebKey | ArrayBuffer>
    generateKey(algorithm: AlgorithmIdentifier, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKeyPair | CryptoKey>
    generateKey(algorithm: RsaHashedKeyGenParams | EcKeyGenParams | DhKeyGenParams, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKeyPair>
    generateKey(algorithm: AesKeyGenParams | HmacKeyGenParams | Pbkdf2Params, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKey>
    importKey(format: "jwk", keyData: JsonWebKey, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKey>
    importKey(format: "raw" | "pkcs8" | "spki", keyData: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKey>
    importKey(format: string, keyData: JsonWebKey | Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, algorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKey>
    sign(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<ArrayBuffer>
    unwrapKey(format: "raw" | "pkcs8" | "spki" | "jwk" | string, wrappedKey: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, unwrappingKey: CryptoKey, unwrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams, unwrappedKeyAlgorithm: AlgorithmIdentifier | RsaHashedImportParams | EcKeyImportParams | HmacImportParams | DhImportKeyParams | AesKeyAlgorithm, extractable: boolean, keyUsages: KeyUsage[]): PromiseLike<CryptoKey>
    verify(algorithm: AlgorithmIdentifier | RsaPssParams | EcdsaParams | AesCmacParams, key: CryptoKey, signature: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer, data: Int8Array | Int16Array | Int32Array | Uint8Array | Uint16Array | Uint32Array | Uint8ClampedArray | Float32Array | Float64Array | DataView | ArrayBuffer): PromiseLike<boolean>
    wrapKey(format: "raw" | "pkcs8" | "spki" | "jwk" | string, key: CryptoKey, wrappingKey: CryptoKey, wrapAlgorithm: AlgorithmIdentifier | RsaOaepParams | AesCtrParams | AesCbcParams | AesCmacParams | AesGcmParams | AesCfbParams): PromiseLike<ArrayBuffer>
}
/** A sync action that is dispatched on the ServiceWorkerGlobalScope of a ServiceWorker.  */
interface SyncEvent extends ExtendableEvent {
    readonly lastChance: boolean
    readonly tag: string
}
/** This ServiceWorker API interface provides an interface for registering and listing sync registrations. */
interface SyncManager {
    getTags(): Promise<string[]>
    register(tag: string): Promise<void>
}
/** A decoder for a specific method, that is a specific character encoding, like utf-8, iso-8859-2, koi8, cp1261, gbk, etc. A decoder takes a stream of bytes as input and emits a stream of code points. For a more scalable, non-native library, see StringView – a C-like representation of strings based on typed arrays. */
interface TextDecoder extends TextDecoderCommon {
    /**
     * Returns the piece of running encoding's decoder. The method can be invoked zero or more times with options's stream set to true, and then once without options's stream (or set to false), to process a fragmented stream. If the invocation without options's stream (or set to false) has no input, it's clearest to omit both arguments.
     * 
     * ```
     * var string = "", decoder = new TextDecoder(encoding), buffer;
     * while(buffer = next_chunk()) {
     *   string += decoder.decode(buffer, {stream:true});
     * }
     * string += decoder.decode(); // end-of-stream
     * ```
     * 
     * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
     */
    decode(input?: BufferSource, options?: TextDecodeOptions): string
}
interface TextDecoderCommon {
    /**
     * Returns encoding's name, lowercased.
     */
    readonly encoding: string
    /**
     * Returns true if error mode is "fatal", and false otherwise.
     */
    readonly fatal: boolean
    /**
     * Returns true if ignore BOM flag is set, and false otherwise.
     */
    readonly ignoreBOM: boolean
}
interface TextDecoderStream extends GenericTransformStream, TextDecoderCommon {
    readonly readable: ReadableStream<string>
    readonly writable: WritableStream<BufferSource>
}
/** TextEncoder takes a stream of code points as input and emits a stream of bytes. For a more scalable, non-native library, see StringView – a C-like representation of strings based on typed arrays. */
interface TextEncoder extends TextEncoderCommon {
    /**
     * Returns the piece of running UTF-8's encoder.
     */
    encode(input?: string): Uint8Array
    /**
     * Runs the UTF-8 encoder on source, stores the piece of that operation into destination, and returns the progress made as a dictionary whereby read is the number of converted code units of source and written is the number of bytes modified in destination.
     */
    encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoPiece
}
interface TextEncoderCommon {
    /**
     * Returns "utf-8".
     */
    readonly encoding: string
}
interface TextEncoderStream extends GenericTransformStream, TextEncoderCommon {
    readonly readable: ReadableStream<Uint8Array>
    readonly writable: WritableStream<string>
}
/** The dimensions of a piece of text in the canvas, as created by the CanvasRenderingContext2D.measureText() method. */
interface TextMetrics {
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxAscent: number
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxDescent: number
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxLeft: number
    /**
     * Returns the measurement described below.
     */
    readonly actualBoundingBoxRight: number
    /**
     * Returns the measurement described below.
     */
    readonly alphabeticBaseline: number
    /**
     * Returns the measurement described below.
     */
    readonly emHeightAscent: number
    /**
     * Returns the measurement described below.
     */
    readonly emHeightDescent: number
    /**
     * Returns the measurement described below.
     */
    readonly fontBoundingBoxAscent: number
    /**
     * Returns the measurement described below.
     */
    readonly fontBoundingBoxDescent: number
    /**
     * Returns the measurement described below.
     */
    readonly hangingBaseline: number
    /**
     * Returns the measurement described below.
     */
    readonly ideographicBaseline: number
    /**
     * Returns the measurement described below.
     */
    readonly width: number
}
interface TransformStream<I = any, O = any> {
    readonly readable: ReadableStream<O>
    readonly writable: WritableStream<I>
}
interface TransformStreamDefaultController<O = any> {
    readonly desiredSize: number | null
    enqueue(chunk: O): void
    error(reason?: any): void
    terminate(): void
}
/** The URL interface represents an object providing static methods used for creating object URLs. */
interface URL {
    hash: string
    host: string
    hostname: string
    href: string
    toString(): string
    readonly origin: string
    password: string
    pathname: string
    port: string
    protocol: string
    search: string
    readonly searchParams: URLSearchParams
    username: string
    toJSON(): string
}
interface URLSearchParams {
    /**
     * Appends a specified key/value pair as a new search parameter.
     */
    append(name: string, value: string): void
    /**
     * Deletes the given search parameter, and its associated value, from the list of all search parameters.
     */
    delete(name: string): void
    /**
     * Returns the first value associated to the given search parameter.
     */
    get(name: string): string | null
    /**
     * Returns all the values association with a given search parameter.
     */
    getAll(name: string): string[]
    /**
     * Returns a Boolean indicating if such a search parameter exists.
     */
    has(name: string): boolean
    /**
     * Sets the value associated to a given search parameter to the given value. If there were several values, delete the others.
     */
    set(name: string, value: string): void
    sort(): void
    /**
     * Returns a string containing a query string suitable for use in a URL. Does not include the question mark.
     */
    toString(): string
    forEach(callbackfn: (value: string, key: string, parent: URLSearchParams) => void, thisArg?: any): void
}
interface WEBGL_color_buffer_float {
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE_EXT: GLenum
    readonly RGBA32F_EXT: GLenum
    readonly UNSIGNED_NORMALIZED_EXT: GLenum
}
interface WEBGL_compressed_texture_astc {
    getSupportedProfiles(): string[]
    readonly COMPRESSED_RGBA_ASTC_10x10_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_10x5_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_10x6_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_10x8_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_12x10_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_12x12_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_4x4_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_5x4_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_5x5_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_6x5_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_6x6_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_8x5_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_8x6_KHR: GLenum
    readonly COMPRESSED_RGBA_ASTC_8x8_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR: GLenum
    readonly COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR: GLenum
}
/** The WEBGL_compressed_texture_s3tc extension is part of the WebGL API and exposes four S3TC compressed texture formats. */
interface WEBGL_compressed_texture_s3tc {
    readonly COMPRESSED_RGBA_S3TC_DXT1_EXT: GLenum
    readonly COMPRESSED_RGBA_S3TC_DXT3_EXT: GLenum
    readonly COMPRESSED_RGBA_S3TC_DXT5_EXT: GLenum
    readonly COMPRESSED_RGB_S3TC_DXT1_EXT: GLenum
}
interface WEBGL_compressed_texture_s3tc_srgb {
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT: GLenum
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT: GLenum
    readonly COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT: GLenum
    readonly COMPRESSED_SRGB_S3TC_DXT1_EXT: GLenum
}
/** The WEBGL_debug_renderer_info extension is part of the WebGL API and exposes two constants with information about the graphics driver for debugging purposes. */
interface WEBGL_debug_renderer_info {
    readonly UNMASKED_RENDERER_WEBGL: GLenum
    readonly UNMASKED_VENDOR_WEBGL: GLenum
}
interface WEBGL_debug_shaders {
    getTranslatedShaderSource(shader: WebGLShader): string
}
/** The WEBGL_depth_texture extension is part of the WebGL API and defines 2D depth and depth-stencil textures. */
interface WEBGL_depth_texture {
    readonly UNSIGNED_INT_24_8_WEBGL: GLenum
}
interface WEBGL_draw_buffers {
    drawBuffersWEBGL(buffers: GLenum[]): void
    readonly COLOR_ATTACHMENT0_WEBGL: GLenum
    readonly COLOR_ATTACHMENT10_WEBGL: GLenum
    readonly COLOR_ATTACHMENT11_WEBGL: GLenum
    readonly COLOR_ATTACHMENT12_WEBGL: GLenum
    readonly COLOR_ATTACHMENT13_WEBGL: GLenum
    readonly COLOR_ATTACHMENT14_WEBGL: GLenum
    readonly COLOR_ATTACHMENT15_WEBGL: GLenum
    readonly COLOR_ATTACHMENT1_WEBGL: GLenum
    readonly COLOR_ATTACHMENT2_WEBGL: GLenum
    readonly COLOR_ATTACHMENT3_WEBGL: GLenum
    readonly COLOR_ATTACHMENT4_WEBGL: GLenum
    readonly COLOR_ATTACHMENT5_WEBGL: GLenum
    readonly COLOR_ATTACHMENT6_WEBGL: GLenum
    readonly COLOR_ATTACHMENT7_WEBGL: GLenum
    readonly COLOR_ATTACHMENT8_WEBGL: GLenum
    readonly COLOR_ATTACHMENT9_WEBGL: GLenum
    readonly DRAW_BUFFER0_WEBGL: GLenum
    readonly DRAW_BUFFER10_WEBGL: GLenum
    readonly DRAW_BUFFER11_WEBGL: GLenum
    readonly DRAW_BUFFER12_WEBGL: GLenum
    readonly DRAW_BUFFER13_WEBGL: GLenum
    readonly DRAW_BUFFER14_WEBGL: GLenum
    readonly DRAW_BUFFER15_WEBGL: GLenum
    readonly DRAW_BUFFER1_WEBGL: GLenum
    readonly DRAW_BUFFER2_WEBGL: GLenum
    readonly DRAW_BUFFER3_WEBGL: GLenum
    readonly DRAW_BUFFER4_WEBGL: GLenum
    readonly DRAW_BUFFER5_WEBGL: GLenum
    readonly DRAW_BUFFER6_WEBGL: GLenum
    readonly DRAW_BUFFER7_WEBGL: GLenum
    readonly DRAW_BUFFER8_WEBGL: GLenum
    readonly DRAW_BUFFER9_WEBGL: GLenum
    readonly MAX_COLOR_ATTACHMENTS_WEBGL: GLenum
    readonly MAX_DRAW_BUFFERS_WEBGL: GLenum
}
interface WEBGL_lose_context {
    loseContext(): void
    restoreContext(): void
}
interface WebGL2RenderingContext extends WebGL2RenderingContextBase, WebGL2RenderingContextOverloads, WebGLRenderingContextBase {
}
interface WebGL2RenderingContextBase {
    beginQuery(target: GLenum, query: WebGLQuery): void
    beginTransformFeedback(primitiveMode: GLenum): void
    bindBufferBase(target: GLenum, index: GLuint, buffer: WebGLBuffer | null): void
    bindBufferRange(target: GLenum, index: GLuint, buffer: WebGLBuffer | null, offset: GLintptr, size: GLsizeiptr): void
    bindSampler(unit: GLuint, sampler: WebGLSampler | null): void
    bindTransformFeedback(target: GLenum, tf: WebGLTransformFeedback | null): void
    bindVertexArray(array: WebGLVertexArrayObject | null): void
    blitFramebuffer(srcX0: GLint, srcY0: GLint, srcX1: GLint, srcY1: GLint, dstX0: GLint, dstY0: GLint, dstX1: GLint, dstY1: GLint, mask: GLbitfield, filter: GLenum): void
    clearBufferfi(buffer: GLenum, drawbuffer: GLint, depth: GLfloat, stencil: GLint): void
    clearBufferfv(buffer: GLenum, drawbuffer: GLint, values: Float32List, srcOffset?: GLuint): void
    clearBufferiv(buffer: GLenum, drawbuffer: GLint, values: Int32List, srcOffset?: GLuint): void
    clearBufferuiv(buffer: GLenum, drawbuffer: GLint, values: Uint32List, srcOffset?: GLuint): void
    clientWaitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLuint64): GLenum
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void
    compressedTexImage3D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void
    compressedTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void
    copyBufferSubData(readTarget: GLenum, writeTarget: GLenum, readOffset: GLintptr, writeOffset: GLintptr, size: GLsizeiptr): void
    copyTexSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void
    createQuery(): WebGLQuery | null
    createSampler(): WebGLSampler | null
    createTransformFeedback(): WebGLTransformFeedback | null
    createVertexArray(): WebGLVertexArrayObject | null
    deleteQuery(query: WebGLQuery | null): void
    deleteSampler(sampler: WebGLSampler | null): void
    deleteSync(sync: WebGLSync | null): void
    deleteTransformFeedback(tf: WebGLTransformFeedback | null): void
    deleteVertexArray(vertexArray: WebGLVertexArrayObject | null): void
    drawArraysInstanced(mode: GLenum, first: GLint, count: GLsizei, instanceCount: GLsizei): void
    drawBuffers(buffers: GLenum[]): void
    drawElementsInstanced(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr, instanceCount: GLsizei): void
    drawRangeElements(mode: GLenum, start: GLuint, end: GLuint, count: GLsizei, type: GLenum, offset: GLintptr): void
    endQuery(target: GLenum): void
    endTransformFeedback(): void
    fenceSync(condition: GLenum, flags: GLbitfield): WebGLSync | null
    framebufferTextureLayer(target: GLenum, attachment: GLenum, texture: WebGLTexture | null, level: GLint, layer: GLint): void
    getActiveUniformBlockName(program: WebGLProgram, uniformBlockIndex: GLuint): string | null
    getActiveUniformBlockParameter(program: WebGLProgram, uniformBlockIndex: GLuint, pname: GLenum): any
    getActiveUniforms(program: WebGLProgram, uniformIndices: GLuint[], pname: GLenum): any
    getBufferSubData(target: GLenum, srcByteOffset: GLintptr, dstBuffer: ArrayBufferView, dstOffset?: GLuint, length?: GLuint): void
    getFragDataLocation(program: WebGLProgram, name: string): GLint
    getIndexedParameter(target: GLenum, index: GLuint): any
    getInternalformatParameter(target: GLenum, internalformat: GLenum, pname: GLenum): any
    getQuery(target: GLenum, pname: GLenum): WebGLQuery | null
    getQueryParameter(query: WebGLQuery, pname: GLenum): any
    getSamplerParameter(sampler: WebGLSampler, pname: GLenum): any
    getSyncParameter(sync: WebGLSync, pname: GLenum): any
    getTransformFeedbackVarying(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null
    getUniformBlockIndex(program: WebGLProgram, uniformBlockName: string): GLuint
    getUniformIndices(program: WebGLProgram, uniformNames: string[]): GLuint[] | null
    invalidateFramebuffer(target: GLenum, attachments: GLenum[]): void
    invalidateSubFramebuffer(target: GLenum, attachments: GLenum[], x: GLint, y: GLint, width: GLsizei, height: GLsizei): void
    isQuery(query: WebGLQuery | null): GLboolean
    isSampler(sampler: WebGLSampler | null): GLboolean
    isSync(sync: WebGLSync | null): GLboolean
    isTransformFeedback(tf: WebGLTransformFeedback | null): GLboolean
    isVertexArray(vertexArray: WebGLVertexArrayObject | null): GLboolean
    pauseTransformFeedback(): void
    readBuffer(src: GLenum): void
    renderbufferStorageMultisample(target: GLenum, samples: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void
    resumeTransformFeedback(): void
    samplerParameterf(sampler: WebGLSampler, pname: GLenum, param: GLfloat): void
    samplerParameteri(sampler: WebGLSampler, pname: GLenum, param: GLint): void
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView | null): void
    texImage3D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void
    texStorage2D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei): void
    texStorage3D(target: GLenum, levels: GLsizei, internalformat: GLenum, width: GLsizei, height: GLsizei, depth: GLsizei): void
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void
    texSubImage3D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, zoffset: GLint, width: GLsizei, height: GLsizei, depth: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView | null, srcOffset?: GLuint): void
    transformFeedbackVaryings(program: WebGLProgram, varyings: string[], bufferMode: GLenum): void
    uniform1ui(location: WebGLUniformLocation | null, v0: GLuint): void
    uniform1uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform2ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint): void
    uniform2uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform3ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint): void
    uniform3uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform4ui(location: WebGLUniformLocation | null, v0: GLuint, v1: GLuint, v2: GLuint, v3: GLuint): void
    uniform4uiv(location: WebGLUniformLocation | null, data: Uint32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformBlockBinding(program: WebGLProgram, uniformBlockIndex: GLuint, uniformBlockBinding: GLuint): void
    uniformMatrix2x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix2x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix3x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix3x4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix4x2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix4x3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    vertexAttribDivisor(index: GLuint, divisor: GLuint): void
    vertexAttribI4i(index: GLuint, x: GLint, y: GLint, z: GLint, w: GLint): void
    vertexAttribI4iv(index: GLuint, values: Int32List): void
    vertexAttribI4ui(index: GLuint, x: GLuint, y: GLuint, z: GLuint, w: GLuint): void
    vertexAttribI4uiv(index: GLuint, values: Uint32List): void
    vertexAttribIPointer(index: GLuint, size: GLint, type: GLenum, stride: GLsizei, offset: GLintptr): void
    waitSync(sync: WebGLSync, flags: GLbitfield, timeout: GLint64): void
    readonly ACTIVE_UNIFORM_BLOCKS: GLenum
    readonly ALREADY_SIGNALED: GLenum
    readonly ANY_SAMPLES_PASSED: GLenum
    readonly ANY_SAMPLES_PASSED_CONSERVATIVE: GLenum
    readonly COLOR: GLenum
    readonly COLOR_ATTACHMENT1: GLenum
    readonly COLOR_ATTACHMENT10: GLenum
    readonly COLOR_ATTACHMENT11: GLenum
    readonly COLOR_ATTACHMENT12: GLenum
    readonly COLOR_ATTACHMENT13: GLenum
    readonly COLOR_ATTACHMENT14: GLenum
    readonly COLOR_ATTACHMENT15: GLenum
    readonly COLOR_ATTACHMENT2: GLenum
    readonly COLOR_ATTACHMENT3: GLenum
    readonly COLOR_ATTACHMENT4: GLenum
    readonly COLOR_ATTACHMENT5: GLenum
    readonly COLOR_ATTACHMENT6: GLenum
    readonly COLOR_ATTACHMENT7: GLenum
    readonly COLOR_ATTACHMENT8: GLenum
    readonly COLOR_ATTACHMENT9: GLenum
    readonly COMPARE_REF_TO_TEXTURE: GLenum
    readonly CONDITION_SATISFIED: GLenum
    readonly COPY_READ_BUFFER: GLenum
    readonly COPY_READ_BUFFER_BINDING: GLenum
    readonly COPY_WRITE_BUFFER: GLenum
    readonly COPY_WRITE_BUFFER_BINDING: GLenum
    readonly CURRENT_QUERY: GLenum
    readonly DEPTH: GLenum
    readonly DEPTH24_STENCIL8: GLenum
    readonly DEPTH32F_STENCIL8: GLenum
    readonly DEPTH_COMPONENT24: GLenum
    readonly DEPTH_COMPONENT32F: GLenum
    readonly DRAW_BUFFER0: GLenum
    readonly DRAW_BUFFER1: GLenum
    readonly DRAW_BUFFER10: GLenum
    readonly DRAW_BUFFER11: GLenum
    readonly DRAW_BUFFER12: GLenum
    readonly DRAW_BUFFER13: GLenum
    readonly DRAW_BUFFER14: GLenum
    readonly DRAW_BUFFER15: GLenum
    readonly DRAW_BUFFER2: GLenum
    readonly DRAW_BUFFER3: GLenum
    readonly DRAW_BUFFER4: GLenum
    readonly DRAW_BUFFER5: GLenum
    readonly DRAW_BUFFER6: GLenum
    readonly DRAW_BUFFER7: GLenum
    readonly DRAW_BUFFER8: GLenum
    readonly DRAW_BUFFER9: GLenum
    readonly DRAW_FRAMEBUFFER: GLenum
    readonly DRAW_FRAMEBUFFER_BINDING: GLenum
    readonly DYNAMIC_COPY: GLenum
    readonly DYNAMIC_READ: GLenum
    readonly FLOAT_32_UNSIGNED_INT_24_8_REV: GLenum
    readonly FLOAT_MAT2x3: GLenum
    readonly FLOAT_MAT2x4: GLenum
    readonly FLOAT_MAT3x2: GLenum
    readonly FLOAT_MAT3x4: GLenum
    readonly FLOAT_MAT4x2: GLenum
    readonly FLOAT_MAT4x3: GLenum
    readonly FRAGMENT_SHADER_DERIVATIVE_HINT: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_RED_SIZE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: GLenum
    readonly FRAMEBUFFER_DEFAULT: GLenum
    readonly FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: GLenum
    readonly HALF_FLOAT: GLenum
    readonly INTERLEAVED_ATTRIBS: GLenum
    readonly INT_2_10_10_10_REV: GLenum
    readonly INT_SAMPLER_2D: GLenum
    readonly INT_SAMPLER_2D_ARRAY: GLenum
    readonly INT_SAMPLER_3D: GLenum
    readonly INT_SAMPLER_CUBE: GLenum
    readonly INVALID_INDEX: GLenum
    readonly MAX: GLenum
    readonly MAX_3D_TEXTURE_SIZE: GLenum
    readonly MAX_ARRAY_TEXTURE_LAYERS: GLenum
    readonly MAX_CLIENT_WAIT_TIMEOUT_WEBGL: GLenum
    readonly MAX_COLOR_ATTACHMENTS: GLenum
    readonly MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: GLenum
    readonly MAX_COMBINED_UNIFORM_BLOCKS: GLenum
    readonly MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: GLenum
    readonly MAX_DRAW_BUFFERS: GLenum
    readonly MAX_ELEMENTS_INDICES: GLenum
    readonly MAX_ELEMENTS_VERTICES: GLenum
    readonly MAX_ELEMENT_INDEX: GLenum
    readonly MAX_FRAGMENT_INPUT_COMPONENTS: GLenum
    readonly MAX_FRAGMENT_UNIFORM_BLOCKS: GLenum
    readonly MAX_FRAGMENT_UNIFORM_COMPONENTS: GLenum
    readonly MAX_PROGRAM_TEXEL_OFFSET: GLenum
    readonly MAX_SAMPLES: GLenum
    readonly MAX_SERVER_WAIT_TIMEOUT: GLenum
    readonly MAX_TEXTURE_LOD_BIAS: GLenum
    readonly MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: GLenum
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: GLenum
    readonly MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: GLenum
    readonly MAX_UNIFORM_BLOCK_SIZE: GLenum
    readonly MAX_UNIFORM_BUFFER_BINDINGS: GLenum
    readonly MAX_VARYING_COMPONENTS: GLenum
    readonly MAX_VERTEX_OUTPUT_COMPONENTS: GLenum
    readonly MAX_VERTEX_UNIFORM_BLOCKS: GLenum
    readonly MAX_VERTEX_UNIFORM_COMPONENTS: GLenum
    readonly MIN: GLenum
    readonly MIN_PROGRAM_TEXEL_OFFSET: GLenum
    readonly OBJECT_TYPE: GLenum
    readonly PACK_ROW_LENGTH: GLenum
    readonly PACK_SKIP_PIXELS: GLenum
    readonly PACK_SKIP_ROWS: GLenum
    readonly PIXEL_PACK_BUFFER: GLenum
    readonly PIXEL_PACK_BUFFER_BINDING: GLenum
    readonly PIXEL_UNPACK_BUFFER: GLenum
    readonly PIXEL_UNPACK_BUFFER_BINDING: GLenum
    readonly QUERY_RESULT: GLenum
    readonly QUERY_RESULT_AVAILABLE: GLenum
    readonly R11F_G11F_B10F: GLenum
    readonly R16F: GLenum
    readonly R16I: GLenum
    readonly R16UI: GLenum
    readonly R32F: GLenum
    readonly R32I: GLenum
    readonly R32UI: GLenum
    readonly R8: GLenum
    readonly R8I: GLenum
    readonly R8UI: GLenum
    readonly R8_SNORM: GLenum
    readonly RASTERIZER_DISCARD: GLenum
    readonly READ_BUFFER: GLenum
    readonly READ_FRAMEBUFFER: GLenum
    readonly READ_FRAMEBUFFER_BINDING: GLenum
    readonly RED: GLenum
    readonly RED_INTEGER: GLenum
    readonly RENDERBUFFER_SAMPLES: GLenum
    readonly RG: GLenum
    readonly RG16F: GLenum
    readonly RG16I: GLenum
    readonly RG16UI: GLenum
    readonly RG32F: GLenum
    readonly RG32I: GLenum
    readonly RG32UI: GLenum
    readonly RG8: GLenum
    readonly RG8I: GLenum
    readonly RG8UI: GLenum
    readonly RG8_SNORM: GLenum
    readonly RGB10_A2: GLenum
    readonly RGB10_A2UI: GLenum
    readonly RGB16F: GLenum
    readonly RGB16I: GLenum
    readonly RGB16UI: GLenum
    readonly RGB32F: GLenum
    readonly RGB32I: GLenum
    readonly RGB32UI: GLenum
    readonly RGB8: GLenum
    readonly RGB8I: GLenum
    readonly RGB8UI: GLenum
    readonly RGB8_SNORM: GLenum
    readonly RGB9_E5: GLenum
    readonly RGBA16F: GLenum
    readonly RGBA16I: GLenum
    readonly RGBA16UI: GLenum
    readonly RGBA32F: GLenum
    readonly RGBA32I: GLenum
    readonly RGBA32UI: GLenum
    readonly RGBA8: GLenum
    readonly RGBA8I: GLenum
    readonly RGBA8UI: GLenum
    readonly RGBA8_SNORM: GLenum
    readonly RGBA_INTEGER: GLenum
    readonly RGB_INTEGER: GLenum
    readonly RG_INTEGER: GLenum
    readonly SAMPLER_2D_ARRAY: GLenum
    readonly SAMPLER_2D_ARRAY_SHADOW: GLenum
    readonly SAMPLER_2D_SHADOW: GLenum
    readonly SAMPLER_3D: GLenum
    readonly SAMPLER_BINDING: GLenum
    readonly SAMPLER_CUBE_SHADOW: GLenum
    readonly SEPARATE_ATTRIBS: GLenum
    readonly SIGNALED: GLenum
    readonly SIGNED_NORMALIZED: GLenum
    readonly SRGB: GLenum
    readonly SRGB8: GLenum
    readonly SRGB8_ALPHA8: GLenum
    readonly STATIC_COPY: GLenum
    readonly STATIC_READ: GLenum
    readonly STENCIL: GLenum
    readonly STREAM_COPY: GLenum
    readonly STREAM_READ: GLenum
    readonly SYNC_CONDITION: GLenum
    readonly SYNC_FENCE: GLenum
    readonly SYNC_FLAGS: GLenum
    readonly SYNC_FLUSH_COMMANDS_BIT: GLenum
    readonly SYNC_GPU_COMMANDS_COMPLETE: GLenum
    readonly SYNC_STATUS: GLenum
    readonly TEXTURE_2D_ARRAY: GLenum
    readonly TEXTURE_3D: GLenum
    readonly TEXTURE_BASE_LEVEL: GLenum
    readonly TEXTURE_BINDING_2D_ARRAY: GLenum
    readonly TEXTURE_BINDING_3D: GLenum
    readonly TEXTURE_COMPARE_FUNC: GLenum
    readonly TEXTURE_COMPARE_MODE: GLenum
    readonly TEXTURE_IMMUTABLE_FORMAT: GLenum
    readonly TEXTURE_IMMUTABLE_LEVELS: GLenum
    readonly TEXTURE_MAX_LEVEL: GLenum
    readonly TEXTURE_MAX_LOD: GLenum
    readonly TEXTURE_MIN_LOD: GLenum
    readonly TEXTURE_WRAP_R: GLenum
    readonly TIMEOUT_EXPIRED: GLenum
    readonly TIMEOUT_IGNORED: GLint64
    readonly TRANSFORM_FEEDBACK: GLenum
    readonly TRANSFORM_FEEDBACK_ACTIVE: GLenum
    readonly TRANSFORM_FEEDBACK_BINDING: GLenum
    readonly TRANSFORM_FEEDBACK_BUFFER: GLenum
    readonly TRANSFORM_FEEDBACK_BUFFER_BINDING: GLenum
    readonly TRANSFORM_FEEDBACK_BUFFER_MODE: GLenum
    readonly TRANSFORM_FEEDBACK_BUFFER_SIZE: GLenum
    readonly TRANSFORM_FEEDBACK_BUFFER_START: GLenum
    readonly TRANSFORM_FEEDBACK_PAUSED: GLenum
    readonly TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: GLenum
    readonly TRANSFORM_FEEDBACK_VARYINGS: GLenum
    readonly UNIFORM_ARRAY_STRIDE: GLenum
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORMS: GLenum
    readonly UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: GLenum
    readonly UNIFORM_BLOCK_BINDING: GLenum
    readonly UNIFORM_BLOCK_DATA_SIZE: GLenum
    readonly UNIFORM_BLOCK_INDEX: GLenum
    readonly UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: GLenum
    readonly UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: GLenum
    readonly UNIFORM_BUFFER: GLenum
    readonly UNIFORM_BUFFER_BINDING: GLenum
    readonly UNIFORM_BUFFER_OFFSET_ALIGNMENT: GLenum
    readonly UNIFORM_BUFFER_SIZE: GLenum
    readonly UNIFORM_BUFFER_START: GLenum
    readonly UNIFORM_IS_ROW_MAJOR: GLenum
    readonly UNIFORM_MATRIX_STRIDE: GLenum
    readonly UNIFORM_OFFSET: GLenum
    readonly UNIFORM_SIZE: GLenum
    readonly UNIFORM_TYPE: GLenum
    readonly UNPACK_IMAGE_HEIGHT: GLenum
    readonly UNPACK_ROW_LENGTH: GLenum
    readonly UNPACK_SKIP_IMAGES: GLenum
    readonly UNPACK_SKIP_PIXELS: GLenum
    readonly UNPACK_SKIP_ROWS: GLenum
    readonly UNSIGNALED: GLenum
    readonly UNSIGNED_INT_10F_11F_11F_REV: GLenum
    readonly UNSIGNED_INT_24_8: GLenum
    readonly UNSIGNED_INT_2_10_10_10_REV: GLenum
    readonly UNSIGNED_INT_5_9_9_9_REV: GLenum
    readonly UNSIGNED_INT_SAMPLER_2D: GLenum
    readonly UNSIGNED_INT_SAMPLER_2D_ARRAY: GLenum
    readonly UNSIGNED_INT_SAMPLER_3D: GLenum
    readonly UNSIGNED_INT_SAMPLER_CUBE: GLenum
    readonly UNSIGNED_INT_VEC2: GLenum
    readonly UNSIGNED_INT_VEC3: GLenum
    readonly UNSIGNED_INT_VEC4: GLenum
    readonly UNSIGNED_NORMALIZED: GLenum
    readonly VERTEX_ARRAY_BINDING: GLenum
    readonly VERTEX_ATTRIB_ARRAY_DIVISOR: GLenum
    readonly VERTEX_ATTRIB_ARRAY_INTEGER: GLenum
    readonly WAIT_FAILED: GLenum
}
interface WebGL2RenderingContextOverloads {
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void
    bufferData(target: GLenum, srcData: BufferSource | null, usage: GLenum): void
    bufferData(target: GLenum, srcData: ArrayBufferView, usage: GLenum, srcOffset: GLuint, length?: GLuint): void
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: BufferSource): void
    bufferSubData(target: GLenum, dstByteOffset: GLintptr, srcData: ArrayBufferView, srcOffset: GLuint, length?: GLuint): void
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, imageSize: GLsizei, offset: GLintptr): void
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, imageSize: GLsizei, offset: GLintptr): void
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, srcData: ArrayBufferView, srcOffset?: GLuint, srcLengthOverride?: GLuint): void
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView | null): void
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, offset: GLintptr): void
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, dstData: ArrayBufferView, dstOffset: GLuint): void
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pboOffset: GLintptr): void
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, source: TexImageSource): void
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pboOffset: GLintptr): void
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, source: TexImageSource): void
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, srcData: ArrayBufferView, srcOffset: GLuint): void
    uniform1fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform1iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform2fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform2iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform3fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform3iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform4fv(location: WebGLUniformLocation | null, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniform4iv(location: WebGLUniformLocation | null, data: Int32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, data: Float32List, srcOffset?: GLuint, srcLength?: GLuint): void
}
/** Part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getActiveAttrib() and WebGLRenderingContext.getActiveUniform() methods. */
interface WebGLActiveInfo {
    readonly name: string
    readonly size: GLint
    readonly type: GLenum
}
/** Part of the WebGL API and represents an opaque buffer object storing data such as vertices or colors. */
interface WebGLBuffer extends WebGLObject {
}
/** The WebContextEvent interface is part of the WebGL API and is an interface for an event that is generated in response to a status change to the WebGL rendering context. */
interface WebGLContextEvent extends Event {
    readonly statusMessage: string
}
/** Part of the WebGL API and represents a collection of buffers that serve as a rendering destination. */
interface WebGLFramebuffer extends WebGLObject {
}
interface WebGLObject {
}
/** The WebGLProgram is part of the WebGL API and is a combination of two compiled WebGLShaders consisting of a vertex shader and a fragment shader (both written in GLSL). */
interface WebGLProgram extends WebGLObject {
}
interface WebGLQuery extends WebGLObject {
}
/** Part of the WebGL API and represents a buffer that can contain an image, or can be source or target of an rendering operation. */
interface WebGLRenderbuffer extends WebGLObject {
}
/** Provides an interface to the OpenGL ES 2.0 graphics rendering context for the drawing surface of an HTML <canvas> element. */
interface WebGLRenderingContext extends WebGLRenderingContextBase, WebGLRenderingContextOverloads {
}
interface WebGLRenderingContextBase {
    readonly canvas: OffscreenCanvas
    readonly drawingBufferHeight: GLsizei
    readonly drawingBufferWidth: GLsizei
    activeTexture(texture: GLenum): void
    attachShader(program: WebGLProgram, shader: WebGLShader): void
    bindAttribLocation(program: WebGLProgram, index: GLuint, name: string): void
    bindBuffer(target: GLenum, buffer: WebGLBuffer | null): void
    bindFramebuffer(target: GLenum, framebuffer: WebGLFramebuffer | null): void
    bindRenderbuffer(target: GLenum, renderbuffer: WebGLRenderbuffer | null): void
    bindTexture(target: GLenum, texture: WebGLTexture | null): void
    blendColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void
    blendEquation(mode: GLenum): void
    blendEquationSeparate(modeRGB: GLenum, modeAlpha: GLenum): void
    blendFunc(sfactor: GLenum, dfactor: GLenum): void
    blendFuncSeparate(srcRGB: GLenum, dstRGB: GLenum, srcAlpha: GLenum, dstAlpha: GLenum): void
    checkFramebufferStatus(target: GLenum): GLenum
    clear(mask: GLbitfield): void
    clearColor(red: GLclampf, green: GLclampf, blue: GLclampf, alpha: GLclampf): void
    clearDepth(depth: GLclampf): void
    clearStencil(s: GLint): void
    colorMask(red: GLboolean, green: GLboolean, blue: GLboolean, alpha: GLboolean): void
    compileShader(shader: WebGLShader): void
    copyTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, x: GLint, y: GLint, width: GLsizei, height: GLsizei, border: GLint): void
    copyTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, x: GLint, y: GLint, width: GLsizei, height: GLsizei): void
    createBuffer(): WebGLBuffer | null
    createFramebuffer(): WebGLFramebuffer | null
    createProgram(): WebGLProgram | null
    createRenderbuffer(): WebGLRenderbuffer | null
    createShader(type: GLenum): WebGLShader | null
    createTexture(): WebGLTexture | null
    cullFace(mode: GLenum): void
    deleteBuffer(buffer: WebGLBuffer | null): void
    deleteFramebuffer(framebuffer: WebGLFramebuffer | null): void
    deleteProgram(program: WebGLProgram | null): void
    deleteRenderbuffer(renderbuffer: WebGLRenderbuffer | null): void
    deleteShader(shader: WebGLShader | null): void
    deleteTexture(texture: WebGLTexture | null): void
    depthFunc(func: GLenum): void
    depthMask(flag: GLboolean): void
    depthRange(zNear: GLclampf, zFar: GLclampf): void
    detachShader(program: WebGLProgram, shader: WebGLShader): void
    disable(cap: GLenum): void
    disableVertexAttribArray(index: GLuint): void
    drawArrays(mode: GLenum, first: GLint, count: GLsizei): void
    drawElements(mode: GLenum, count: GLsizei, type: GLenum, offset: GLintptr): void
    enable(cap: GLenum): void
    enableVertexAttribArray(index: GLuint): void
    finish(): void
    flush(): void
    framebufferRenderbuffer(target: GLenum, attachment: GLenum, renderbuffertarget: GLenum, renderbuffer: WebGLRenderbuffer | null): void
    framebufferTexture2D(target: GLenum, attachment: GLenum, textarget: GLenum, texture: WebGLTexture | null, level: GLint): void
    frontFace(mode: GLenum): void
    generateMipmap(target: GLenum): void
    getActiveAttrib(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null
    getActiveUniform(program: WebGLProgram, index: GLuint): WebGLActiveInfo | null
    getAttachedShaders(program: WebGLProgram): WebGLShader[] | null
    getAttribLocation(program: WebGLProgram, name: string): GLint
    getBufferParameter(target: GLenum, pname: GLenum): any
    getContextAttributes(): WebGLContextAttributes | null
    getError(): GLenum
    getExtension(extensionName: "EXT_blend_minmax"): EXT_blend_minmax | null
    getExtension(extensionName: "EXT_texture_filter_anisotropic"): EXT_texture_filter_anisotropic | null
    getExtension(extensionName: "EXT_frag_depth"): EXT_frag_depth | null
    getExtension(extensionName: "EXT_shader_texture_lod"): EXT_shader_texture_lod | null
    getExtension(extensionName: "EXT_sRGB"): EXT_sRGB | null
    getExtension(extensionName: "OES_vertex_array_object"): OES_vertex_array_object | null
    getExtension(extensionName: "WEBGL_color_buffer_float"): WEBGL_color_buffer_float | null
    getExtension(extensionName: "WEBGL_compressed_texture_astc"): WEBGL_compressed_texture_astc | null
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc_srgb"): WEBGL_compressed_texture_s3tc_srgb | null
    getExtension(extensionName: "WEBGL_debug_shaders"): WEBGL_debug_shaders | null
    getExtension(extensionName: "WEBGL_draw_buffers"): WEBGL_draw_buffers | null
    getExtension(extensionName: "WEBGL_lose_context"): WEBGL_lose_context | null
    getExtension(extensionName: "WEBGL_depth_texture"): WEBGL_depth_texture | null
    getExtension(extensionName: "WEBGL_debug_renderer_info"): WEBGL_debug_renderer_info | null
    getExtension(extensionName: "WEBGL_compressed_texture_s3tc"): WEBGL_compressed_texture_s3tc | null
    getExtension(extensionName: "OES_texture_half_float_linear"): OES_texture_half_float_linear | null
    getExtension(extensionName: "OES_texture_half_float"): OES_texture_half_float | null
    getExtension(extensionName: "OES_texture_float_linear"): OES_texture_float_linear | null
    getExtension(extensionName: "OES_texture_float"): OES_texture_float | null
    getExtension(extensionName: "OES_standard_derivatives"): OES_standard_derivatives | null
    getExtension(extensionName: "OES_element_index_uint"): OES_element_index_uint | null
    getExtension(extensionName: "ANGLE_instanced_arrays"): ANGLE_instanced_arrays | null
    getExtension(extensionName: string): any
    getFramebufferAttachmentParameter(target: GLenum, attachment: GLenum, pname: GLenum): any
    getParameter(pname: GLenum): any
    getProgramInfoLog(program: WebGLProgram): string | null
    getProgramParameter(program: WebGLProgram, pname: GLenum): any
    getRenderbufferParameter(target: GLenum, pname: GLenum): any
    getShaderInfoLog(shader: WebGLShader): string | null
    getShaderParameter(shader: WebGLShader, pname: GLenum): any
    getShaderPrecisionFormat(shadertype: GLenum, precisiontype: GLenum): WebGLShaderPrecisionFormat | null
    getShaderSource(shader: WebGLShader): string | null
    getSupportedExtensions(): string[] | null
    getTexParameter(target: GLenum, pname: GLenum): any
    getUniform(program: WebGLProgram, location: WebGLUniformLocation): any
    getUniformLocation(program: WebGLProgram, name: string): WebGLUniformLocation | null
    getVertexAttrib(index: GLuint, pname: GLenum): any
    getVertexAttribOffset(index: GLuint, pname: GLenum): GLintptr
    hint(target: GLenum, mode: GLenum): void
    isBuffer(buffer: WebGLBuffer | null): GLboolean
    isContextLost(): boolean
    isEnabled(cap: GLenum): GLboolean
    isFramebuffer(framebuffer: WebGLFramebuffer | null): GLboolean
    isProgram(program: WebGLProgram | null): GLboolean
    isRenderbuffer(renderbuffer: WebGLRenderbuffer | null): GLboolean
    isShader(shader: WebGLShader | null): GLboolean
    isTexture(texture: WebGLTexture | null): GLboolean
    lineWidth(width: GLfloat): void
    linkProgram(program: WebGLProgram): void
    pixelStorei(pname: GLenum, param: GLint | GLboolean): void
    polygonOffset(factor: GLfloat, units: GLfloat): void
    renderbufferStorage(target: GLenum, internalformat: GLenum, width: GLsizei, height: GLsizei): void
    sampleCoverage(value: GLclampf, invert: GLboolean): void
    scissor(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void
    shaderSource(shader: WebGLShader, source: string): void
    stencilFunc(func: GLenum, ref: GLint, mask: GLuint): void
    stencilFuncSeparate(face: GLenum, func: GLenum, ref: GLint, mask: GLuint): void
    stencilMask(mask: GLuint): void
    stencilMaskSeparate(face: GLenum, mask: GLuint): void
    stencilOp(fail: GLenum, zfail: GLenum, zpass: GLenum): void
    stencilOpSeparate(face: GLenum, fail: GLenum, zfail: GLenum, zpass: GLenum): void
    texParameterf(target: GLenum, pname: GLenum, param: GLfloat): void
    texParameteri(target: GLenum, pname: GLenum, param: GLint): void
    uniform1f(location: WebGLUniformLocation | null, x: GLfloat): void
    uniform1i(location: WebGLUniformLocation | null, x: GLint): void
    uniform2f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat): void
    uniform2i(location: WebGLUniformLocation | null, x: GLint, y: GLint): void
    uniform3f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat): void
    uniform3i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint): void
    uniform4f(location: WebGLUniformLocation | null, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void
    uniform4i(location: WebGLUniformLocation | null, x: GLint, y: GLint, z: GLint, w: GLint): void
    useProgram(program: WebGLProgram | null): void
    validateProgram(program: WebGLProgram): void
    vertexAttrib1f(index: GLuint, x: GLfloat): void
    vertexAttrib1fv(index: GLuint, values: Float32List): void
    vertexAttrib2f(index: GLuint, x: GLfloat, y: GLfloat): void
    vertexAttrib2fv(index: GLuint, values: Float32List): void
    vertexAttrib3f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat): void
    vertexAttrib3fv(index: GLuint, values: Float32List): void
    vertexAttrib4f(index: GLuint, x: GLfloat, y: GLfloat, z: GLfloat, w: GLfloat): void
    vertexAttrib4fv(index: GLuint, values: Float32List): void
    vertexAttribPointer(index: GLuint, size: GLint, type: GLenum, normalized: GLboolean, stride: GLsizei, offset: GLintptr): void
    viewport(x: GLint, y: GLint, width: GLsizei, height: GLsizei): void
    readonly ACTIVE_ATTRIBUTES: GLenum
    readonly ACTIVE_TEXTURE: GLenum
    readonly ACTIVE_UNIFORMS: GLenum
    readonly ALIASED_LINE_WIDTH_RANGE: GLenum
    readonly ALIASED_POINT_SIZE_RANGE: GLenum
    readonly ALPHA: GLenum
    readonly ALPHA_BITS: GLenum
    readonly ALWAYS: GLenum
    readonly ARRAY_BUFFER: GLenum
    readonly ARRAY_BUFFER_BINDING: GLenum
    readonly ATTACHED_SHADERS: GLenum
    readonly BACK: GLenum
    readonly BLEND: GLenum
    readonly BLEND_COLOR: GLenum
    readonly BLEND_DST_ALPHA: GLenum
    readonly BLEND_DST_RGB: GLenum
    readonly BLEND_EQUATION: GLenum
    readonly BLEND_EQUATION_ALPHA: GLenum
    readonly BLEND_EQUATION_RGB: GLenum
    readonly BLEND_SRC_ALPHA: GLenum
    readonly BLEND_SRC_RGB: GLenum
    readonly BLUE_BITS: GLenum
    readonly BOOL: GLenum
    readonly BOOL_VEC2: GLenum
    readonly BOOL_VEC3: GLenum
    readonly BOOL_VEC4: GLenum
    readonly BROWSER_DEFAULT_WEBGL: GLenum
    readonly BUFFER_SIZE: GLenum
    readonly BUFFER_USAGE: GLenum
    readonly BYTE: GLenum
    readonly CCW: GLenum
    readonly CLAMP_TO_EDGE: GLenum
    readonly COLOR_ATTACHMENT0: GLenum
    readonly COLOR_BUFFER_BIT: GLenum
    readonly COLOR_CLEAR_VALUE: GLenum
    readonly COLOR_WRITEMASK: GLenum
    readonly COMPILE_STATUS: GLenum
    readonly COMPRESSED_TEXTURE_FORMATS: GLenum
    readonly CONSTANT_ALPHA: GLenum
    readonly CONSTANT_COLOR: GLenum
    readonly CONTEXT_LOST_WEBGL: GLenum
    readonly CULL_FACE: GLenum
    readonly CULL_FACE_MODE: GLenum
    readonly CURRENT_PROGRAM: GLenum
    readonly CURRENT_VERTEX_ATTRIB: GLenum
    readonly CW: GLenum
    readonly DECR: GLenum
    readonly DECR_WRAP: GLenum
    readonly DELETE_STATUS: GLenum
    readonly DEPTH_ATTACHMENT: GLenum
    readonly DEPTH_BITS: GLenum
    readonly DEPTH_BUFFER_BIT: GLenum
    readonly DEPTH_CLEAR_VALUE: GLenum
    readonly DEPTH_COMPONENT: GLenum
    readonly DEPTH_COMPONENT16: GLenum
    readonly DEPTH_FUNC: GLenum
    readonly DEPTH_RANGE: GLenum
    readonly DEPTH_STENCIL: GLenum
    readonly DEPTH_STENCIL_ATTACHMENT: GLenum
    readonly DEPTH_TEST: GLenum
    readonly DEPTH_WRITEMASK: GLenum
    readonly DITHER: GLenum
    readonly DONT_CARE: GLenum
    readonly DST_ALPHA: GLenum
    readonly DST_COLOR: GLenum
    readonly DYNAMIC_DRAW: GLenum
    readonly ELEMENT_ARRAY_BUFFER: GLenum
    readonly ELEMENT_ARRAY_BUFFER_BINDING: GLenum
    readonly EQUAL: GLenum
    readonly FASTEST: GLenum
    readonly FLOAT: GLenum
    readonly FLOAT_MAT2: GLenum
    readonly FLOAT_MAT3: GLenum
    readonly FLOAT_MAT4: GLenum
    readonly FLOAT_VEC2: GLenum
    readonly FLOAT_VEC3: GLenum
    readonly FLOAT_VEC4: GLenum
    readonly FRAGMENT_SHADER: GLenum
    readonly FRAMEBUFFER: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: GLenum
    readonly FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: GLenum
    readonly FRAMEBUFFER_BINDING: GLenum
    readonly FRAMEBUFFER_COMPLETE: GLenum
    readonly FRAMEBUFFER_INCOMPLETE_ATTACHMENT: GLenum
    readonly FRAMEBUFFER_INCOMPLETE_DIMENSIONS: GLenum
    readonly FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: GLenum
    readonly FRAMEBUFFER_UNSUPPORTED: GLenum
    readonly FRONT: GLenum
    readonly FRONT_AND_BACK: GLenum
    readonly FRONT_FACE: GLenum
    readonly FUNC_ADD: GLenum
    readonly FUNC_REVERSE_SUBTRACT: GLenum
    readonly FUNC_SUBTRACT: GLenum
    readonly GENERATE_MIPMAP_HINT: GLenum
    readonly GEQUAL: GLenum
    readonly GREATER: GLenum
    readonly GREEN_BITS: GLenum
    readonly HIGH_FLOAT: GLenum
    readonly HIGH_INT: GLenum
    readonly IMPLEMENTATION_COLOR_READ_FORMAT: GLenum
    readonly IMPLEMENTATION_COLOR_READ_TYPE: GLenum
    readonly INCR: GLenum
    readonly INCR_WRAP: GLenum
    readonly INT: GLenum
    readonly INT_VEC2: GLenum
    readonly INT_VEC3: GLenum
    readonly INT_VEC4: GLenum
    readonly INVALID_ENUM: GLenum
    readonly INVALID_FRAMEBUFFER_OPERATION: GLenum
    readonly INVALID_OPERATION: GLenum
    readonly INVALID_VALUE: GLenum
    readonly INVERT: GLenum
    readonly KEEP: GLenum
    readonly LEQUAL: GLenum
    readonly LESS: GLenum
    readonly LINEAR: GLenum
    readonly LINEAR_MIPMAP_LINEAR: GLenum
    readonly LINEAR_MIPMAP_NEAREST: GLenum
    readonly LINES: GLenum
    readonly LINE_LOOP: GLenum
    readonly LINE_STRIP: GLenum
    readonly LINE_WIDTH: GLenum
    readonly LINK_STATUS: GLenum
    readonly LOW_FLOAT: GLenum
    readonly LOW_INT: GLenum
    readonly LUMINANCE: GLenum
    readonly LUMINANCE_ALPHA: GLenum
    readonly MAX_COMBINED_TEXTURE_IMAGE_UNITS: GLenum
    readonly MAX_CUBE_MAP_TEXTURE_SIZE: GLenum
    readonly MAX_FRAGMENT_UNIFORM_VECTORS: GLenum
    readonly MAX_RENDERBUFFER_SIZE: GLenum
    readonly MAX_TEXTURE_IMAGE_UNITS: GLenum
    readonly MAX_TEXTURE_SIZE: GLenum
    readonly MAX_VARYING_VECTORS: GLenum
    readonly MAX_VERTEX_ATTRIBS: GLenum
    readonly MAX_VERTEX_TEXTURE_IMAGE_UNITS: GLenum
    readonly MAX_VERTEX_UNIFORM_VECTORS: GLenum
    readonly MAX_VIEWPORT_DIMS: GLenum
    readonly MEDIUM_FLOAT: GLenum
    readonly MEDIUM_INT: GLenum
    readonly MIRRORED_REPEAT: GLenum
    readonly NEAREST: GLenum
    readonly NEAREST_MIPMAP_LINEAR: GLenum
    readonly NEAREST_MIPMAP_NEAREST: GLenum
    readonly NEVER: GLenum
    readonly NICEST: GLenum
    readonly NONE: GLenum
    readonly NOTEQUAL: GLenum
    readonly NO_ERROR: GLenum
    readonly ONE: GLenum
    readonly ONE_MINUS_CONSTANT_ALPHA: GLenum
    readonly ONE_MINUS_CONSTANT_COLOR: GLenum
    readonly ONE_MINUS_DST_ALPHA: GLenum
    readonly ONE_MINUS_DST_COLOR: GLenum
    readonly ONE_MINUS_SRC_ALPHA: GLenum
    readonly ONE_MINUS_SRC_COLOR: GLenum
    readonly OUT_OF_MEMORY: GLenum
    readonly PACK_ALIGNMENT: GLenum
    readonly POINTS: GLenum
    readonly POLYGON_OFFSET_FACTOR: GLenum
    readonly POLYGON_OFFSET_FILL: GLenum
    readonly POLYGON_OFFSET_UNITS: GLenum
    readonly RED_BITS: GLenum
    readonly RENDERBUFFER: GLenum
    readonly RENDERBUFFER_ALPHA_SIZE: GLenum
    readonly RENDERBUFFER_BINDING: GLenum
    readonly RENDERBUFFER_BLUE_SIZE: GLenum
    readonly RENDERBUFFER_DEPTH_SIZE: GLenum
    readonly RENDERBUFFER_GREEN_SIZE: GLenum
    readonly RENDERBUFFER_HEIGHT: GLenum
    readonly RENDERBUFFER_INTERNAL_FORMAT: GLenum
    readonly RENDERBUFFER_RED_SIZE: GLenum
    readonly RENDERBUFFER_STENCIL_SIZE: GLenum
    readonly RENDERBUFFER_WIDTH: GLenum
    readonly RENDERER: GLenum
    readonly REPEAT: GLenum
    readonly REPLACE: GLenum
    readonly RGB: GLenum
    readonly RGB565: GLenum
    readonly RGB5_A1: GLenum
    readonly RGBA: GLenum
    readonly RGBA4: GLenum
    readonly SAMPLER_2D: GLenum
    readonly SAMPLER_CUBE: GLenum
    readonly SAMPLES: GLenum
    readonly SAMPLE_ALPHA_TO_COVERAGE: GLenum
    readonly SAMPLE_BUFFERS: GLenum
    readonly SAMPLE_COVERAGE: GLenum
    readonly SAMPLE_COVERAGE_INVERT: GLenum
    readonly SAMPLE_COVERAGE_VALUE: GLenum
    readonly SCISSOR_BOX: GLenum
    readonly SCISSOR_TEST: GLenum
    readonly SHADER_TYPE: GLenum
    readonly SHADING_LANGUAGE_VERSION: GLenum
    readonly SHORT: GLenum
    readonly SRC_ALPHA: GLenum
    readonly SRC_ALPHA_SATURATE: GLenum
    readonly SRC_COLOR: GLenum
    readonly STATIC_DRAW: GLenum
    readonly STENCIL_ATTACHMENT: GLenum
    readonly STENCIL_BACK_FAIL: GLenum
    readonly STENCIL_BACK_FUNC: GLenum
    readonly STENCIL_BACK_PASS_DEPTH_FAIL: GLenum
    readonly STENCIL_BACK_PASS_DEPTH_PASS: GLenum
    readonly STENCIL_BACK_REF: GLenum
    readonly STENCIL_BACK_VALUE_MASK: GLenum
    readonly STENCIL_BACK_WRITEMASK: GLenum
    readonly STENCIL_BITS: GLenum
    readonly STENCIL_BUFFER_BIT: GLenum
    readonly STENCIL_CLEAR_VALUE: GLenum
    readonly STENCIL_FAIL: GLenum
    readonly STENCIL_FUNC: GLenum
    readonly STENCIL_INDEX8: GLenum
    readonly STENCIL_PASS_DEPTH_FAIL: GLenum
    readonly STENCIL_PASS_DEPTH_PASS: GLenum
    readonly STENCIL_REF: GLenum
    readonly STENCIL_TEST: GLenum
    readonly STENCIL_VALUE_MASK: GLenum
    readonly STENCIL_WRITEMASK: GLenum
    readonly STREAM_DRAW: GLenum
    readonly SUBPIXEL_BITS: GLenum
    readonly TEXTURE: GLenum
    readonly TEXTURE0: GLenum
    readonly TEXTURE1: GLenum
    readonly TEXTURE10: GLenum
    readonly TEXTURE11: GLenum
    readonly TEXTURE12: GLenum
    readonly TEXTURE13: GLenum
    readonly TEXTURE14: GLenum
    readonly TEXTURE15: GLenum
    readonly TEXTURE16: GLenum
    readonly TEXTURE17: GLenum
    readonly TEXTURE18: GLenum
    readonly TEXTURE19: GLenum
    readonly TEXTURE2: GLenum
    readonly TEXTURE20: GLenum
    readonly TEXTURE21: GLenum
    readonly TEXTURE22: GLenum
    readonly TEXTURE23: GLenum
    readonly TEXTURE24: GLenum
    readonly TEXTURE25: GLenum
    readonly TEXTURE26: GLenum
    readonly TEXTURE27: GLenum
    readonly TEXTURE28: GLenum
    readonly TEXTURE29: GLenum
    readonly TEXTURE3: GLenum
    readonly TEXTURE30: GLenum
    readonly TEXTURE31: GLenum
    readonly TEXTURE4: GLenum
    readonly TEXTURE5: GLenum
    readonly TEXTURE6: GLenum
    readonly TEXTURE7: GLenum
    readonly TEXTURE8: GLenum
    readonly TEXTURE9: GLenum
    readonly TEXTURE_2D: GLenum
    readonly TEXTURE_BINDING_2D: GLenum
    readonly TEXTURE_BINDING_CUBE_MAP: GLenum
    readonly TEXTURE_CUBE_MAP: GLenum
    readonly TEXTURE_CUBE_MAP_NEGATIVE_X: GLenum
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Y: GLenum
    readonly TEXTURE_CUBE_MAP_NEGATIVE_Z: GLenum
    readonly TEXTURE_CUBE_MAP_POSITIVE_X: GLenum
    readonly TEXTURE_CUBE_MAP_POSITIVE_Y: GLenum
    readonly TEXTURE_CUBE_MAP_POSITIVE_Z: GLenum
    readonly TEXTURE_MAG_FILTER: GLenum
    readonly TEXTURE_MIN_FILTER: GLenum
    readonly TEXTURE_WRAP_S: GLenum
    readonly TEXTURE_WRAP_T: GLenum
    readonly TRIANGLES: GLenum
    readonly TRIANGLE_FAN: GLenum
    readonly TRIANGLE_STRIP: GLenum
    readonly UNPACK_ALIGNMENT: GLenum
    readonly UNPACK_COLORSPACE_CONVERSION_WEBGL: GLenum
    readonly UNPACK_FLIP_Y_WEBGL: GLenum
    readonly UNPACK_PREMULTIPLY_ALPHA_WEBGL: GLenum
    readonly UNSIGNED_BYTE: GLenum
    readonly UNSIGNED_INT: GLenum
    readonly UNSIGNED_SHORT: GLenum
    readonly UNSIGNED_SHORT_4_4_4_4: GLenum
    readonly UNSIGNED_SHORT_5_5_5_1: GLenum
    readonly UNSIGNED_SHORT_5_6_5: GLenum
    readonly VALIDATE_STATUS: GLenum
    readonly VENDOR: GLenum
    readonly VERSION: GLenum
    readonly VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: GLenum
    readonly VERTEX_ATTRIB_ARRAY_ENABLED: GLenum
    readonly VERTEX_ATTRIB_ARRAY_NORMALIZED: GLenum
    readonly VERTEX_ATTRIB_ARRAY_POINTER: GLenum
    readonly VERTEX_ATTRIB_ARRAY_SIZE: GLenum
    readonly VERTEX_ATTRIB_ARRAY_STRIDE: GLenum
    readonly VERTEX_ATTRIB_ARRAY_TYPE: GLenum
    readonly VERTEX_SHADER: GLenum
    readonly VIEWPORT: GLenum
    readonly ZERO: GLenum
}
interface WebGLRenderingContextOverloads {
    bufferData(target: GLenum, size: GLsizeiptr, usage: GLenum): void
    bufferData(target: GLenum, data: BufferSource | null, usage: GLenum): void
    bufferSubData(target: GLenum, offset: GLintptr, data: BufferSource): void
    compressedTexImage2D(target: GLenum, level: GLint, internalformat: GLenum, width: GLsizei, height: GLsizei, border: GLint, data: ArrayBufferView): void
    compressedTexSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, data: ArrayBufferView): void
    readPixels(x: GLint, y: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, width: GLsizei, height: GLsizei, border: GLint, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void
    texImage2D(target: GLenum, level: GLint, internalformat: GLint, format: GLenum, type: GLenum, source: TexImageSource): void
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, width: GLsizei, height: GLsizei, format: GLenum, type: GLenum, pixels: ArrayBufferView | null): void
    texSubImage2D(target: GLenum, level: GLint, xoffset: GLint, yoffset: GLint, format: GLenum, type: GLenum, source: TexImageSource): void
    uniform1fv(location: WebGLUniformLocation | null, v: Float32List): void
    uniform1iv(location: WebGLUniformLocation | null, v: Int32List): void
    uniform2fv(location: WebGLUniformLocation | null, v: Float32List): void
    uniform2iv(location: WebGLUniformLocation | null, v: Int32List): void
    uniform3fv(location: WebGLUniformLocation | null, v: Float32List): void
    uniform3iv(location: WebGLUniformLocation | null, v: Int32List): void
    uniform4fv(location: WebGLUniformLocation | null, v: Float32List): void
    uniform4iv(location: WebGLUniformLocation | null, v: Int32List): void
    uniformMatrix2fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void
    uniformMatrix3fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void
    uniformMatrix4fv(location: WebGLUniformLocation | null, transpose: GLboolean, value: Float32List): void
}
interface WebGLSampler extends WebGLObject {
}
/** The WebGLShader is part of the WebGL API and can either be a vertex or a fragment shader. A WebGLProgram requires both types of shaders. */
interface WebGLShader extends WebGLObject {
}
/** Part of the WebGL API and represents the information returned by calling the WebGLRenderingContext.getShaderPrecisionFormat() method. */
interface WebGLShaderPrecisionFormat {
    readonly precision: GLint
    readonly rangeMax: GLint
    readonly rangeMin: GLint
}
interface WebGLSync extends WebGLObject {
}
/** Part of the WebGL API and represents an opaque texture object providing storage and state for texturing operations. */
interface WebGLTexture extends WebGLObject {
}
interface WebGLTransformFeedback extends WebGLObject {
}
/** Part of the WebGL API and represents the location of a uniform variable in a shader program. */
interface WebGLUniformLocation {
}
interface WebGLVertexArrayObject extends WebGLObject {
}
interface WebGLVertexArrayObjectOES extends WebGLObject {
}
interface WebSocketEventMap {
    "close": CloseEvent
    "error": Event
    "message": MessageEvent
    "open": Event
}
/** Provides the API for creating and managing a WebSocket connection to a server, as well as for sending and receiving data on the connection. */
interface WebSocket extends EventTarget {
    /**
     * Returns a string that indicates how binary data from the WebSocket object is exposed to scripts:
     * 
     * Can be set, to change how binary data is returned. The default is "blob".
     */
    binaryType: BinaryType
    /**
     * Returns the number of bytes of application data (UTF-8 text and binary data) that have been queued using send() but not yet been transmitted to the network.
     * 
     * If the WebSocket connection is closed, this attribute's value will only increase with each call to the send() method. (The number does not reset to zero once the connection closes.)
     */
    readonly bufferedAmount: number
    /**
     * Returns the extensions selected by the server, if any.
     */
    readonly extensions: string
    onclose: ((this: WebSocket, ev: CloseEvent) => any) | null
    onerror: ((this: WebSocket, ev: Event) => any) | null
    onmessage: ((this: WebSocket, ev: MessageEvent) => any) | null
    onopen: ((this: WebSocket, ev: Event) => any) | null
    /**
     * Returns the subprotocol selected by the server, if any. It can be used in conjunction with the array form of the constructor's second argument to perform subprotocol negotiation.
     */
    readonly protocol: string
    /**
     * Returns the state of the WebSocket object's connection. It can have the values described below.
     */
    readonly readyState: number
    /**
     * Returns the URL that was used to establish the WebSocket connection.
     */
    readonly url: string
    /**
     * Closes the WebSocket connection, optionally using code as the the WebSocket connection close code and reason as the the WebSocket connection close reason.
     */
    close(code?: number, reason?: string): void
    /**
     * Transmits data using the WebSocket connection. data can be a string, a Blob, an ArrayBuffer, or an ArrayBufferView.
     */
    send(data: string | ArrayBufferLike | Blob | ArrayBufferView): void
    readonly CLOSED: number
    readonly CLOSING: number
    readonly CONNECTING: number
    readonly OPEN: number
    addEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof WebSocketEventMap>(type: K, listener: (this: WebSocket, ev: WebSocketEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** This ServiceWorker API interface represents the scope of a service worker client that is a document in a browser context, controlled by an active worker. The service worker client independently selects and uses a service worker for its own loading and sub-resources. */
interface WindowClient extends Client {
    readonly ancestorOrigins: ReadonlyArray<string>
    readonly focused: boolean
    readonly visibilityState: VisibilityState
    focus(): Promise<WindowClient>
    navigate(url: string): Promise<WindowClient | null>
}
interface WindowOrWorkerGlobalScope {
    readonly caches: CacheStorage
    readonly crypto: Crypto
    readonly indexedDB: IDBFactory
    readonly isSecureContext: boolean
    readonly origin: string
    readonly performance: Performance
    atob(data: string): string
    btoa(data: string): string
    clearInterval(handle?: number): void
    clearTimeout(handle?: number): void
    createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>
    createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>
    fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
    queueMicrotask(callback: VoidFunction): void
    setInterval<A extends any[]>(handler: (...args: A) => void, timeout?: number, ...arguments: A): number
    setTimeout<A extends any[]>(handler: (...args: A) => void, timeout?: number, ...arguments: A): number
}
interface WorkerEventMap extends AbstractWorkerEventMap {
    "message": MessageEvent
    "messageerror": MessageEvent
}
/** This Web Workers API interface represents a background task that can be easily created and can send messages back to its creator. Creating a worker is as simple as calling the Worker() constructor and specifying a script to be run in the worker thread. */
interface Worker extends EventTarget, AbstractWorker {
    onmessage: ((this: Worker, ev: MessageEvent) => any) | null
    onmessageerror: ((this: Worker, ev: MessageEvent) => any) | null
    /**
     * Clones message and transmits it to worker's global environment. transfer can be passed as a list of objects that are to be transferred rather than cloned.
     */
    postMessage(message: any, transfer: Transferable[]): void
    postMessage(message: any, options?: PostMessageOptions): void
    /**
     * Aborts worker's associated global environment.
     */
    terminate(): void
    addEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof WorkerEventMap>(type: K, listener: (this: Worker, ev: WorkerEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface WorkerGlobalScopeEventMap {
    "error": ErrorEvent
    "languagechange": Event
    "offline": Event
    "online": Event
    "rejectionhandled": PromiseRejectionEvent
    "unhandledrejection": PromiseRejectionEvent
}
/** This Web Workers API interface is an interface representing the scope of any worker. Workers have no browsing context; this scope contains the information usually conveyed by Window objects — in this case event handlers, the console or the associated WorkerNavigator object. Each WorkerGlobalScope has its own event loop. */
interface WorkerGlobalScope extends EventTarget, WindowOrWorkerGlobalScope {
    /**
     * Returns workerGlobal's WorkerLocation object.
     */
    readonly location: WorkerLocation
    readonly navigator: WorkerNavigator
    onerror: ((this: WorkerGlobalScope, ev: ErrorEvent) => any) | null
    onlanguagechange: ((this: WorkerGlobalScope, ev: Event) => any) | null
    onoffline: ((this: WorkerGlobalScope, ev: Event) => any) | null
    ononline: ((this: WorkerGlobalScope, ev: Event) => any) | null
    onrejectionhandled: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null
    onunhandledrejection: ((this: WorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null
    /**
     * Returns workerGlobal.
     */
    readonly self: WorkerGlobalScope & typeof globalThis
    /**
     * Fetches each URL in urls, executes them one-by-one in the order they are passed, and then returns (or throws if something went amiss).
     */
    importScripts(...urls: string[]): void
    addEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof WorkerGlobalScopeEventMap>(type: K, listener: (this: WorkerGlobalScope, ev: WorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
/** The absolute location of the script executed by the Worker. Such an object is initialized for each worker and is available via the WorkerGlobalScope.location property obtained by calling self.location. */
interface WorkerLocation {
    readonly hash: string
    readonly host: string
    readonly hostname: string
    readonly href: string
    toString(): string
    readonly origin: string
    readonly pathname: string
    readonly port: string
    readonly protocol: string
    readonly search: string
}
/** A subset of the Navigator interface allowed to be accessed from a Worker. Such an object is initialized for each worker and is available via the WorkerGlobalScope.navigator property obtained by calling window.self.navigator. */
interface WorkerNavigator extends NavigatorConcurrentHardware, NavigatorID, NavigatorLanguage, NavigatorOnLine, NavigatorStorage {
    readonly permissions: Permissions
    readonly serviceWorker: ServiceWorkerContainer
}
/** This Streams API interface provides a standard abstraction for writing streaming data to a destination, known as a sink. This object comes with built-in backpressure and queuing. */
interface WritableStream<W = any> {
    readonly locked: boolean
    abort(reason?: any): Promise<void>
    getWriter(): WritableStreamDefaultWriter<W>
}
/** This Streams API interface represents a controller allowing control of a WritableStream's state. When constructing a WritableStream, the underlying sink is given a corresponding WritableStreamDefaultController instance to manipulate. */
interface WritableStreamDefaultController {
    error(error?: any): void
}
/** This Streams API interface is the object returned by WritableStream.getWriter() and once created locks the < writer to the WritableStream ensuring that no other streams can write to the underlying sink. */
interface WritableStreamDefaultWriter<W = any> {
    readonly closed: Promise<void>
    readonly desiredSize: number | null
    readonly ready: Promise<void>
    abort(reason?: any): Promise<void>
    close(): Promise<void>
    releaseLock(): void
    write(chunk: W): Promise<void>
}
interface XMLHttpRequestEventMap extends XMLHttpRequestEventTargetEventMap {
    "readystatechange": Event
}
/** Use XMLHttpRequest (XHR) objects to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. */
interface XMLHttpRequest extends XMLHttpRequestEventTarget {
    onreadystatechange: ((this: XMLHttpRequest, ev: Event) => any) | null
    /**
     * Returns client's state.
     */
    readonly readyState: number
    /**
     * Returns the response's body.
     */
    readonly response: any
    /**
     * Returns the text response.
     * 
     * Throws an "InvalidStateError" DOMException if responseType is not the empty string or "text".
     */
    readonly responseText: string
    /**
     * Returns the response type.
     * 
     * Can be set to change the response type. Values are: the empty string (default), "arraybuffer", "blob", "document", "json", and "text".
     * 
     * When set: setting to "document" is ignored if current global object is not a Window object.
     * 
     * When set: throws an "InvalidStateError" DOMException if state is loading or done.
     * 
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    responseType: XMLHttpRequestResponseType
    readonly responseURL: string
    readonly status: number
    readonly statusText: string
    /**
     * Can be set to a time in milliseconds. When set to a non-zero value will cause fetching to terminate after the given time has passed. When the time has passed, the request has not yet completed, and the synchronous flag is unset, a timeout event will then be dispatched, or a "TimeoutError" DOMException will be thrown otherwise (for the send() method).
     * 
     * When set: throws an "InvalidAccessError" DOMException if the synchronous flag is set and current global object is a Window object.
     */
    timeout: number
    /**
     * Returns the associated XMLHttpRequestUpload object. It can be used to gather transmission information when data is transferred to a server.
     */
    readonly upload: XMLHttpRequestUpload
    /**
     * True when credentials are to be included in a cross-origin request. False when they are to be excluded in a cross-origin request and when cookies are to be ignored in its response. Initially false.
     * 
     * When set: throws an "InvalidStateError" DOMException if state is not unsent or opened, or if the send() flag is set.
     */
    withCredentials: boolean
    /**
     * Cancels any network activity.
     */
    abort(): void
    getAllResponseHeaders(): string
    getResponseHeader(name: string): string | null
    /**
     * Sets the request method, request URL, and synchronous flag.
     * 
     * Throws a "SyntaxError" DOMException if either method is not a valid HTTP method or url cannot be parsed.
     * 
     * Throws a "SecurityError" DOMException if method is a case-insensitive match for `CONNECT`, `TRACE`, or `TRACK`.
     * 
     * Throws an "InvalidAccessError" DOMException if async is false, current global object is a Window object, and the timeout attribute is not zero or the responseType attribute is not the empty string.
     */
    open(method: string, url: string): void
    open(method: string, url: string, async: boolean, username?: string | null, password?: string | null): void
    /**
     * Acts as if the `Content-Type` header value for response is mime. (It does not actually change the header though.)
     * 
     * Throws an "InvalidStateError" DOMException if state is loading or done.
     */
    overrideMimeType(mime: string): void
    /**
     * Initiates the request. The body argument provides the request body, if any, and is ignored if the request method is GET or HEAD.
     * 
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     */
    send(body?: BodyInit | null): void
    /**
     * Combines a header in author request headers.
     * 
     * Throws an "InvalidStateError" DOMException if either state is not opened or the send() flag is set.
     * 
     * Throws a "SyntaxError" DOMException if name is not a header name or if value is not a header value.
     */
    setRequestHeader(name: string, value: string): void
    readonly DONE: number
    readonly HEADERS_RECEIVED: number
    readonly LOADING: number
    readonly OPENED: number
    readonly UNSENT: number
    addEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof XMLHttpRequestEventMap>(type: K, listener: (this: XMLHttpRequest, ev: XMLHttpRequestEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface XMLHttpRequestEventTargetEventMap {
    "abort": ProgressEvent<XMLHttpRequestEventTarget>
    "error": ProgressEvent<XMLHttpRequestEventTarget>
    "load": ProgressEvent<XMLHttpRequestEventTarget>
    "loadend": ProgressEvent<XMLHttpRequestEventTarget>
    "loadstart": ProgressEvent<XMLHttpRequestEventTarget>
    "progress": ProgressEvent<XMLHttpRequestEventTarget>
    "timeout": ProgressEvent<XMLHttpRequestEventTarget>
}
interface XMLHttpRequestEventTarget extends EventTarget {
    onabort: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null
    onerror: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null
    onload: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null
    onloadend: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null
    onloadstart: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null
    onprogress: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null
    ontimeout: ((this: XMLHttpRequest, ev: ProgressEvent) => any) | null
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestEventTarget, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
interface XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
    addEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    removeEventListener<K extends keyof XMLHttpRequestEventTargetEventMap>(type: K, listener: (this: XMLHttpRequestUpload, ev: XMLHttpRequestEventTargetEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
declare type EventListenerOrEventListenerObject = EventListener | EventListenerObject
interface Console {
    memory: any
    assert(condition?: boolean, ...data: any[]): void
    clear(): void
    count(label?: string): void
    countReset(label?: string): void
    debug(...data: any[]): void
    dir(item?: any, options?: any): void
    dirxml(...data: any[]): void
    error(...data: any[]): void
    exception(message?: string, ...optionalParams: any[]): void
    group(...data: any[]): void
    groupCollapsed(...data: any[]): void
    groupEnd(): void
    info(...data: any[]): void
    log(...data: any[]): void
    table(tabularData?: any, properties?: string[]): void
    time(label?: string): void
    timeEnd(label?: string): void
    timeLog(label?: string, ...data: any[]): void
    timeStamp(label?: string): void
    trace(...data: any[]): void
    warn(...data: any[]): void
}
interface FrameRequestCallback {
    (time: number): void
}
interface OnErrorEventHandlerNonNull {
    (event: Event | string, source?: string, lineno?: number, colno?: number, error?: Error): any
}
interface PerformanceObserverCallback {
    (entries: PerformanceObserverEntryList, observer: PerformanceObserver): void
}
interface QueuingStrategySizeCallback<T = any> {
    (chunk: T): number
}
interface ReadableByteStreamControllerCallback {
    (controller: ReadableByteStreamController): void | PromiseLike<void>
}
interface ReadableStreamDefaultControllerCallback<R> {
    (controller: ReadableStreamDefaultController<R>): void | PromiseLike<void>
}
interface ReadableStreamErrorCallback {
    (reason: any): void | PromiseLike<void>
}
interface TransformStreamDefaultControllerCallback<O> {
    (controller: TransformStreamDefaultController<O>): void | PromiseLike<void>
}
interface TransformStreamDefaultControllerTransformCallback<I, O> {
    (chunk: I, controller: TransformStreamDefaultController<O>): void | PromiseLike<void>
}
interface VoidFunction {
    (): void
}
interface WritableStreamDefaultControllerCloseCallback {
    (): void | PromiseLike<void>
}
interface WritableStreamDefaultControllerStartCallback {
    (controller: WritableStreamDefaultController): void | PromiseLike<void>
}
interface WritableStreamDefaultControllerWriteCallback<W> {
    (chunk: W, controller: WritableStreamDefaultController): void | PromiseLike<void>
}
interface WritableStreamErrorCallback {
    (reason: any): void | PromiseLike<void>
}
type HeadersInit = Headers | string[][] | Record<string, string>
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | ReadableStream<Uint8Array> | string
type RequestInfo = Request | string
type BlobPart = BufferSource | Blob | string
type DOMHighResTimeStamp = number
type CanvasImageSource = ImageBitmap | OffscreenCanvas
type OffscreenRenderingContext = OffscreenCanvasRenderingContext2D | ImageBitmapRenderingContext | WebGLRenderingContext | WebGL2RenderingContext
type MessageEventSource = MessagePort | ServiceWorker
type ImageBitmapSource = CanvasImageSource | Blob | ImageData
type OnErrorEventHandler = OnErrorEventHandlerNonNull | null
type TimerHandler = string | Function
type PerformanceEntryList = PerformanceEntry[]
type PushMessageDataInit = BufferSource | string
type ReadableStreamReadPiece<T> = ReadableStreamReadValuePiece<T> | ReadableStreamReadDonePiece<T>
type VibratePattern = number | number[]
type AlgorithmIdentifier = string | Algorithm
type HashAlgorithmIdentifier = AlgorithmIdentifier
type BigInteger = Uint8Array
type NamedCurve = string
type GLenum = number
type GLboolean = boolean
type GLbitfield = number
type GLint = number
type GLsizei = number
type GLintptr = number
type GLsizeiptr = number
type GLuint = number
type GLfloat = number
type GLclampf = number
type TexImageSource = ImageBitmap | ImageData | OffscreenCanvas
type Float32List = Float32Array | GLfloat[]
type Int32List = Int32Array | GLint[]
type GLint64 = number
type GLuint64 = number
type Uint32List = Uint32Array | GLuint[]
type BufferSource = ArrayBufferView | ArrayBuffer
type DOMTimeStamp = number
type FormDataEntryValue = File | string
type IDBValidKey = number | string | Date | BufferSource | IDBArrayKey
type Transferable = ArrayBuffer | MessagePort | ImageBitmap | OffscreenCanvas
type BinaryType = "arraybuffer" | "blob"
type CanvasDirection = "inherit" | "ltr" | "rtl"
type CanvasFillRule = "evenodd" | "nonzero"
type CanvasLineCap = "butt" | "round" | "square"
type CanvasLineJoin = "bevel" | "miter" | "round"
type CanvasTextAlign = "center" | "end" | "left" | "right" | "start"
type CanvasTextBaseline = "alphabetic" | "bottom" | "hanging" | "ideographic" | "middle" | "top"
type ClientTypes = "all" | "sharedworker" | "window" | "worker"
type ColorSpaceConversion = "default" | "none"
type EndingType = "native" | "transparent"
type FrameType = "auxiliary" | "nested" | "none" | "top-level"
type IDBCursorDirection = "next" | "nextunique" | "prev" | "prevunique"
type IDBRequestReadyState = "done" | "pending"
type IDBTransactionMode = "readonly" | "readwrite" | "versionchange"
type ImageOrientation = "flipY" | "none"
type ImageSmoothingQuality = "high" | "low" | "medium"
type KeyFormat = "jwk" | "pkcs8" | "raw" | "spki"
type KeyType = "private" | "public" | "secret"
type KeyUsage = "decrypt" | "deriveBits" | "deriveKey" | "encrypt" | "sign" | "unwrapKey" | "verify" | "wrapKey"
type NotificationDirection = "auto" | "ltr" | "rtl"
type NotificationPermission = "default" | "denied" | "granted"
type OffscreenRenderingContextId = "2d" | "bitmaprenderer" | "webgl" | "webgl2"
type PermissionName = "accelerometer" | "ambient-light-sensor" | "background-sync" | "bluetooth" | "camera" | "clipboard" | "device-info" | "geolocation" | "gyroscope" | "magnetometer" | "microphone" | "midi" | "notifications" | "persistent-storage" | "push" | "speaker"
type PermissionState = "denied" | "granted" | "prompt"
type PremultiplyAlpha = "default" | "none" | "premultiply"
type PushEncryptionKeyName = "auth" | "p256dh"
type PushPermissionState = "denied" | "granted" | "prompt"
type ReferrerPolicy = "" | "no-referrer" | "no-referrer-when-downgrade" | "origin" | "origin-when-cross-origin" | "same-origin" | "strict-origin" | "strict-origin-when-cross-origin" | "unsafe-url"
type RequestCache = "default" | "force-cache" | "no-cache" | "no-store" | "only-if-cached" | "reload"
type RequestCredentials = "include" | "omit" | "same-origin"
type RequestDestination = "" | "audio" | "audioworklet" | "document" | "embed" | "font" | "image" | "manifest" | "object" | "paintworklet" | "report" | "script" | "sharedworker" | "style" | "track" | "video" | "worker" | "xslt"
type RequestMode = "cors" | "navigate" | "no-cors" | "same-origin"
type RequestRedirect = "error" | "follow" | "manual"
type ResizeQuality = "high" | "low" | "medium" | "pixelated"
type ResponseType = "basic" | "cors" | "default" | "error" | "opaque" | "opaqueredirect"
type ServiceWorkerState = "activated" | "activating" | "installed" | "installing" | "parsed" | "redundant"
type ServiceWorkerUpdateViaCache = "all" | "imports" | "none"
type VisibilityState = "hidden" | "visible"
type WebGLPowerPreference = "default" | "high-performance" | "low-power"
type WorkerType = "classic" | "module"
type XMLHttpRequestResponseType = "" | "arraybuffer" | "blob" | "document" | "json" | "text"