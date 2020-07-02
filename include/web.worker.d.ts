declare namespace self {
    var AbortController: {
        prototype: AbortController
        new(): AbortController
    }
    var AbortSignal: {
        prototype: AbortSignal
        new(): AbortSignal
    }
    var Blob: {
        prototype: Blob
        new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob
    }
    var BroadcastChannel: {
        prototype: BroadcastChannel
        new(name: string): BroadcastChannel
    }
    var ByteLengthQueuingStrategy: {
        prototype: ByteLengthQueuingStrategy
        new(options: { highWaterMark: number }): ByteLengthQueuingStrategy
    }
    var Cache: {
        prototype: Cache
        new(): Cache
    }
    var CacheStorage: {
        prototype: CacheStorage
        new(): CacheStorage
    }
    var CanvasGradient: {
        prototype: CanvasGradient
        new(): CanvasGradient
    }
    var CanvasPattern: {
        prototype: CanvasPattern
        new(): CanvasPattern
    }
    var Client: {
        prototype: Client
        new(): Client
    }
    var Clients: {
        prototype: Clients
        new(): Clients
    }
    var CloseEvent: {
        prototype: CloseEvent
        new(type: string, eventInitDict?: CloseEventInit): CloseEvent
    }
    var CountQueuingStrategy: {
        prototype: CountQueuingStrategy
        new(options: { highWaterMark: number }): CountQueuingStrategy
    }
    var Crypto: {
        prototype: Crypto
        new(): Crypto
    }
    var CryptoKey: {
        prototype: CryptoKey
        new(): CryptoKey
    }
    var CustomEvent: {
        prototype: CustomEvent
        new <T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>
    }
    var DOMException: {
        prototype: DOMException
        new(message?: string, name?: string): DOMException
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
    var DOMMatrix: {
        prototype: DOMMatrix
        new(init?: string | number[]): DOMMatrix
        fromFloat32Array(array32: Float32Array): DOMMatrix
        fromFloat64Array(array64: Float64Array): DOMMatrix
        fromMatrix(other?: DOMMatrixInit): DOMMatrix
    }
    var DOMMatrixReadOnly: {
        prototype: DOMMatrixReadOnly
        new(init?: string | number[]): DOMMatrixReadOnly
        fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly
        fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly
        fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly
    }
    var DOMPoint: {
        prototype: DOMPoint
        new(x?: number, y?: number, z?: number, w?: number): DOMPoint
        fromPoint(other?: DOMPointInit): DOMPoint
    }
    var DOMPointReadOnly: {
        prototype: DOMPointReadOnly
        new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly
        fromPoint(other?: DOMPointInit): DOMPointReadOnly
    }
    var DOMQuad: {
        prototype: DOMQuad
        new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad
        fromQuad(other?: DOMQuadInit): DOMQuad
        fromRect(other?: DOMRectInit): DOMQuad
    }
    var DOMRect: {
        prototype: DOMRect
        new(x?: number, y?: number, width?: number, height?: number): DOMRect
        fromRect(other?: DOMRectInit): DOMRect
    }
    var DOMRectReadOnly: {
        prototype: DOMRectReadOnly
        new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly
        fromRect(other?: DOMRectInit): DOMRectReadOnly
    }
    var DOMStringList: {
        prototype: DOMStringList
        new(): DOMStringList
    }
    var DedicatedWorkerGlobalScope: {
        prototype: DedicatedWorkerGlobalScope
        new(): DedicatedWorkerGlobalScope
    }
    var ErrorEvent: {
        prototype: ErrorEvent
        new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent
    }
    var Event: {
        prototype: Event
        new(type: string, eventInitDict?: EventInit): Event
        readonly AT_TARGET: number
        readonly BUBBLING_PHASE: number
        readonly CAPTURING_PHASE: number
        readonly NONE: number
    }
    var EventSource: {
        prototype: EventSource
        new(url: string, eventSourceInitDict?: EventSourceInit): EventSource
        readonly CLOSED: number
        readonly CONNECTING: number
        readonly OPEN: number
    }
    var EventTarget: {
        prototype: EventTarget
        new(): EventTarget
    }
    var ExtendableEvent: {
        prototype: ExtendableEvent
        new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent
    }
    var ExtendableMessageEvent: {
        prototype: ExtendableMessageEvent
        new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent
    }
    var FetchEvent: {
        prototype: FetchEvent
        new(type: string, eventInitDict: FetchEventInit): FetchEvent
    }
    var File: {
        prototype: File
        new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File
    }
    var FileList: {
        prototype: FileList
        new(): FileList
    }
    var FileReader: {
        prototype: FileReader
        new(): FileReader
        readonly DONE: number
        readonly EMPTY: number
        readonly LOADING: number
    }
    var FileReaderSync: {
        prototype: FileReaderSync
        new(): FileReaderSync
    }
    var FormData: {
        prototype: FormData
        new(): FormData
    }
    var Headers: {
        prototype: Headers
        new(init?: HeadersInit): Headers
    }
    var IDBCursor: {
        prototype: IDBCursor
        new(): IDBCursor
    }
    var IDBCursorWithValue: {
        prototype: IDBCursorWithValue
        new(): IDBCursorWithValue
    }
    var IDBDatabase: {
        prototype: IDBDatabase
        new(): IDBDatabase
    }
    var IDBFactory: {
        prototype: IDBFactory
        new(): IDBFactory
    }
    var IDBIndex: {
        prototype: IDBIndex
        new(): IDBIndex
    }
    var IDBKeyRange: {
        prototype: IDBKeyRange
        new(): IDBKeyRange
        /**
         * Returns a new IDBKeyRange spanning from lower to upper. If lowerOpen is true, lower is not included in the range. If upperOpen is true, upper is not included in the range.
         */
        bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange
        /**
         * Returns a new IDBKeyRange starting at key with no upper bound. If open is true, key is not included in the range.
         */
        lowerBound(lower: any, open?: boolean): IDBKeyRange
        /**
         * Returns a new IDBKeyRange spanning only key.
         */
        only(value: any): IDBKeyRange
        /**
         * Returns a new IDBKeyRange with no lower bound and ending at key. If open is true, key is not included in the range.
         */
        upperBound(upper: any, open?: boolean): IDBKeyRange
    }
    var IDBObjectStore: {
        prototype: IDBObjectStore
        new(): IDBObjectStore
    }
    var IDBOpenDBRequest: {
        prototype: IDBOpenDBRequest
        new(): IDBOpenDBRequest
    }
    var IDBRequest: {
        prototype: IDBRequest
        new(): IDBRequest
    }
    var IDBTransaction: {
        prototype: IDBTransaction
        new(): IDBTransaction
    }
    var IDBVersionChangeEvent: {
        prototype: IDBVersionChangeEvent
        new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent
    }
    var ImageBitmap: {
        prototype: ImageBitmap
        new(): ImageBitmap
    }
    var ImageBitmapRenderingContext: {
        prototype: ImageBitmapRenderingContext
        new(): ImageBitmapRenderingContext
    }
    var ImageData: {
        prototype: ImageData
        new(width: number, height: number): ImageData
        new(array: Uint8ClampedArray, width: number, height?: number): ImageData
    }
    var MessageChannel: {
        prototype: MessageChannel
        new(): MessageChannel
    }
    var MessageEvent: {
        prototype: MessageEvent
        new(type: string, eventInitDict?: MessageEventInit): MessageEvent
    }
    var MessagePort: {
        prototype: MessagePort
        new(): MessagePort
    }
    var NavigationPreloadManager: {
        prototype: NavigationPreloadManager
        new(): NavigationPreloadManager
    }
    var Notification: {
        prototype: Notification
        new(title: string, options?: NotificationOptions): Notification
        readonly maxActions: number
        readonly permission: NotificationPermission
    }
    var NotificationEvent: {
        prototype: NotificationEvent
        new(type: string, eventInitDict: NotificationEventInit): NotificationEvent
    }
    var OffscreenCanvas: {
        prototype: OffscreenCanvas
        new(width: number, height: number): OffscreenCanvas
    }
    var OffscreenCanvasRenderingContext2D: {
        prototype: OffscreenCanvasRenderingContext2D
        new(): OffscreenCanvasRenderingContext2D
    }
    var Path2D: {
        prototype: Path2D
        new(path?: Path2D | string): Path2D
    }
    var Performance: {
        prototype: Performance
        new(): Performance
    }
    var PerformanceEntry: {
        prototype: PerformanceEntry
        new(): PerformanceEntry
    }
    var PerformanceMark: {
        prototype: PerformanceMark
        new(): PerformanceMark
    }
    var PerformanceMeasure: {
        prototype: PerformanceMeasure
        new(): PerformanceMeasure
    }
    var PerformanceObserver: {
        prototype: PerformanceObserver
        new(callback: PerformanceObserverCallback): PerformanceObserver
        readonly supportedEntryTypes: ReadonlyArray<string>
    }
    var PerformanceObserverEntryList: {
        prototype: PerformanceObserverEntryList
        new(): PerformanceObserverEntryList
    }
    var PerformanceResourceTiming: {
        prototype: PerformanceResourceTiming
        new(): PerformanceResourceTiming
    }
    var PermissionStatus: {
        prototype: PermissionStatus
        new(): PermissionStatus
    }
    var Permissions: {
        prototype: Permissions
        new(): Permissions
    }
    var ProgressEvent: {
        prototype: ProgressEvent
        new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent
    }
    var PromiseRejectionEvent: {
        prototype: PromiseRejectionEvent
        new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent
    }
    var PushEvent: {
        prototype: PushEvent
        new(type: string, eventInitDict?: PushEventInit): PushEvent
    }
    var PushManager: {
        prototype: PushManager
        new(): PushManager
        readonly supportedContentEncodings: ReadonlyArray<string>
    }
    var PushMessageData: {
        prototype: PushMessageData
        new(): PushMessageData
    }
    var PushSubscription: {
        prototype: PushSubscription
        new(): PushSubscription
    }
    var PushSubscriptionChangeEvent: {
        prototype: PushSubscriptionChangeEvent
        new(type: string, eventInitDict?: PushSubscriptionChangeEventInit): PushSubscriptionChangeEvent
    }
    var PushSubscriptionOptions: {
        prototype: PushSubscriptionOptions
        new(): PushSubscriptionOptions
    }
    var ReadableStream: {
        prototype: ReadableStream
        new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: undefined }): ReadableStream<Uint8Array>
        new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>
    }
    var ReadableStreamReader: {
        prototype: ReadableStreamReader
        new(): ReadableStreamReader
    }
    var Request: {
        prototype: Request
        new(input: RequestInfo, init?: RequestInit): Request
    }
    var Response: {
        prototype: Response
        new(body?: BodyInit | null, init?: ResponseInit): Response
        error(): Response
        redirect(url: string, status?: number): Response
    }
    var ServiceWorker: {
        prototype: ServiceWorker
        new(): ServiceWorker
    }
    var ServiceWorkerContainer: {
        prototype: ServiceWorkerContainer
        new(): ServiceWorkerContainer
    }
    var ServiceWorkerGlobalScope: {
        prototype: ServiceWorkerGlobalScope
        new(): ServiceWorkerGlobalScope
    }
    var ServiceWorkerRegistration: {
        prototype: ServiceWorkerRegistration
        new(): ServiceWorkerRegistration
    }
    var SharedWorker: {
        prototype: SharedWorker
        new(scriptURL: string, options?: string | WorkerOptions): SharedWorker
    }
    var SharedWorkerGlobalScope: {
        prototype: SharedWorkerGlobalScope
        new(): SharedWorkerGlobalScope
    }
    var StorageManager: {
        prototype: StorageManager
        new(): StorageManager
    }
    var SubtleCrypto: {
        prototype: SubtleCrypto
        new(): SubtleCrypto
    }
    var SyncEvent: {
        prototype: SyncEvent
        new(type: string, init: SyncEventInit): SyncEvent
    }
    var SyncManager: {
        prototype: SyncManager
        new(): SyncManager
    }
    var TextDecoder: {
        prototype: TextDecoder
        new(label?: string, options?: TextDecoderOptions): TextDecoder
    }
    var TextDecoderStream: {
        prototype: TextDecoderStream
        new(label?: string, options?: TextDecoderOptions): TextDecoderStream
    }
    var TextEncoder: {
        prototype: TextEncoder
        new(): TextEncoder
    }
    var TextEncoderStream: {
        prototype: TextEncoderStream
        new(): TextEncoderStream
    }
    var TextMetrics: {
        prototype: TextMetrics
        new(): TextMetrics
    }
    var TransformStream: {
        prototype: TransformStream
        new <I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>
    }
    var URL: {
        prototype: URL
        new(url: string, base?: string | URL): URL
        createObjectURL(object: any): string
        revokeObjectURL(url: string): void
    }
    var URLSearchParams: {
        prototype: URLSearchParams
        new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams
        toString(): string
    }
    var WebGL2RenderingContext: {
        prototype: WebGL2RenderingContext
        new(): WebGL2RenderingContext
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
    var WebGLActiveInfo: {
        prototype: WebGLActiveInfo
        new(): WebGLActiveInfo
    }
    var WebGLBuffer: {
        prototype: WebGLBuffer
        new(): WebGLBuffer
    }
    var WebGLContextEvent: {
        prototype: WebGLContextEvent
        new(type: string, eventInit?: WebGLContextEventInit): WebGLContextEvent
    }
    var WebGLFramebuffer: {
        prototype: WebGLFramebuffer
        new(): WebGLFramebuffer
    }
    var WebGLObject: {
        prototype: WebGLObject
        new(): WebGLObject
    }
    var WebGLProgram: {
        prototype: WebGLProgram
        new(): WebGLProgram
    }
    var WebGLQuery: {
        prototype: WebGLQuery
        new(): WebGLQuery
    }
    var WebGLRenderbuffer: {
        prototype: WebGLRenderbuffer
        new(): WebGLRenderbuffer
    }
    var WebGLRenderingContext: {
        prototype: WebGLRenderingContext
        new(): WebGLRenderingContext
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
    var WebGLSampler: {
        prototype: WebGLSampler
        new(): WebGLSampler
    }
    var WebGLShader: {
        prototype: WebGLShader
        new(): WebGLShader
    }
    var WebGLShaderPrecisionFormat: {
        prototype: WebGLShaderPrecisionFormat
        new(): WebGLShaderPrecisionFormat
    }
    var WebGLSync: {
        prototype: WebGLSync
        new(): WebGLSync
    }
    var WebGLTexture: {
        prototype: WebGLTexture
        new(): WebGLTexture
    }
    var WebGLTransformFeedback: {
        prototype: WebGLTransformFeedback
        new(): WebGLTransformFeedback
    }
    var WebGLUniformLocation: {
        prototype: WebGLUniformLocation
        new(): WebGLUniformLocation
    }
    var WebGLVertexArrayObject: {
        prototype: WebGLVertexArrayObject
        new(): WebGLVertexArrayObject
    }
    var WebSocket: {
        prototype: WebSocket
        new(url: string, protocols?: string | string[]): WebSocket
        readonly CLOSED: number
        readonly CLOSING: number
        readonly CONNECTING: number
        readonly OPEN: number
    }
    var WindowClient: {
        prototype: WindowClient
        new(): WindowClient
    }
    var Worker: {
        prototype: Worker
        new(stringUrl: string | URL, options?: WorkerOptions): Worker
    }
    var WorkerGlobalScope: {
        prototype: WorkerGlobalScope
        new(): WorkerGlobalScope
    }
    var WorkerLocation: {
        prototype: WorkerLocation
        new(): WorkerLocation
    }
    var WorkerNavigator: {
        prototype: WorkerNavigator
        new(): WorkerNavigator
    }
    var WritableStream: {
        prototype: WritableStream
        new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>
    }
    var XMLHttpRequest: {
        prototype: XMLHttpRequest
        new(): XMLHttpRequest
        readonly DONE: number
        readonly HEADERS_RECEIVED: number
        readonly LOADING: number
        readonly OPENED: number
        readonly UNSENT: number
    }
    var XMLHttpRequestEventTarget: {
        prototype: XMLHttpRequestEventTarget
        new(): XMLHttpRequestEventTarget
    }
    var XMLHttpRequestUpload: {
        prototype: XMLHttpRequestUpload
        new(): XMLHttpRequestUpload
    }
    var console: Console
    namespace WebAssembly {
        interface Global {
            value: any
            valueOf(): any
        }

        var Global: {
            prototype: Global
            new(descriptor: GlobalDescriptor, v?: any): Global
        }

        interface Instance {
            readonly exports: Exports
        }

        var Instance: {
            prototype: Instance
            new(module: Module, importObject?: Imports): Instance
        }

        interface Memory {
            readonly buffer: ArrayBuffer
            grow(delta: number): number
        }

        var Memory: {
            prototype: Memory
            new(descriptor: MemoryDescriptor): Memory
        }

        interface Module {
        }

        var Module: {
            prototype: Module
            new(bytes: BufferSource): Module
            customSections(moduleObject: Module, sectionName: string): ArrayBuffer[]
            exports(moduleObject: Module): ModuleExportDescriptor[]
            imports(moduleObject: Module): ModuleImportDescriptor[]
        }

        interface Table {
            readonly length: number
            get(index: number): Function | null
            grow(delta: number): number
            set(index: number, value: Function | null): void
        }

        var Table: {
            prototype: Table
            new(descriptor: TableDescriptor): Table
        }

        interface GlobalDescriptor {
            mutable?: boolean
            value: ValueType
        }

        interface MemoryDescriptor {
            initial: number
            maximum?: number
        }

        interface ModuleExportDescriptor {
            kind: ImportExportKind
            name: string
        }

        interface ModuleImportDescriptor {
            kind: ImportExportKind
            module: string
            name: string
        }

        interface TableDescriptor {
            element: TableKind
            initial: number
            maximum?: number
        }

        interface WebAssemblyInstantiatedSource {
            instance: Instance
            module: Module
        }

        type ImportExportKind = "function" | "global" | "memory" | "table"
        type TableKind = "anyfunc"
        type ValueType = "f32" | "f64" | "i32" | "i64"
        type ExportValue = Function | Global | Memory | Table
        type Exports = Record<string, ExportValue>
        type ImportValue = ExportValue | number
        type ModuleImports = Record<string, ImportValue>
        type Imports = Record<string, ModuleImports>
        function compile(bytes: BufferSource): Promise<Module>
        function compileStreaming(source: Response | Promise<Response>): Promise<Module>
        function instantiate(bytes: BufferSource, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>
        function instantiate(moduleObject: Module, importObject?: Imports): Promise<Instance>
        function instantiateStreaming(response: Response | PromiseLike<Response>, importObject?: Imports): Promise<WebAssemblyInstantiatedSource>
        function validate(bytes: BufferSource): boolean
    }
    /**
     * Returns dedicatedWorkerGlobal's name, i.e. the value given to the Worker constructor. Primarily useful for debugging.
     */
    var name: string
    var onmessage: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null
    var onmessageerror: ((this: DedicatedWorkerGlobalScope, ev: MessageEvent) => any) | null
    /**
     * Aborts dedicatedWorkerGlobal.
     */
    function close(): void
    /**
     * Clones message and transmits it to the Worker object associated with dedicatedWorkerGlobal. transfer can be passed as a list of objects that are to be transferred rather than cloned.
     */
    function postMessage(message: any, transfer: Transferable[]): void
    function postMessage(message: any, options?: PostMessageOptions): void
    /**
     * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     */
    function dispatchEvent(event: Event): boolean
    /**
     * Returns workerGlobal's WorkerLocation object.
     */
    var location: WorkerLocation
    var navigator: WorkerNavigator
    var onerror: ((this: DedicatedWorkerGlobalScope, ev: ErrorEvent) => any) | null
    var onlanguagechange: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null
    var onoffline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null
    var ononline: ((this: DedicatedWorkerGlobalScope, ev: Event) => any) | null
    var onrejectionhandled: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null
    var onunhandledrejection: ((this: DedicatedWorkerGlobalScope, ev: PromiseRejectionEvent) => any) | null
    /**
     * Returns workerGlobal.
     */
    var self: WorkerGlobalScope & typeof globalThis
    /**
     * Fetches each URL in urls, executes them one-by-one in the order they are passed, and then returns (or throws if something went amiss).
     */
    function importScripts(...urls: string[]): void
    /**
     * Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.
     */
    function dispatchEvent(event: Event): boolean
    var caches: CacheStorage
    var crypto: Crypto
    var indexedDB: IDBFactory
    var isSecureContext: boolean
    var origin: string
    var performance: Performance
    function atob(data: string): string
    function btoa(data: string): string
    function clearInterval(handle?: number): void
    function clearTimeout(handle?: number): void
    function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>
    function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>
    function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
    function queueMicrotask(callback: VoidFunction): void
    function setInterval<A extends any[]>(handler: (...args: A) => void, timeout?: number, ...arguments: A): number
    function setTimeout<A extends any[]>(handler: (...args: A) => void, timeout?: number, ...arguments: A): number
    function cancelAnimationFrame(handle: number): void
    function requestAnimationFrame(callback: FrameRequestCallback): number
    function addEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    function removeEventListener<K extends keyof DedicatedWorkerGlobalScopeEventMap>(type: K, listener: (this: DedicatedWorkerGlobalScope, ev: DedicatedWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
