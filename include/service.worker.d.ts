declare namespace self {
    const caches: CacheStorage
    const clients: Clients
    const crypto: Crypto
    const indexedDB: IDBFactory
    const isSecureContext: true
    const location: WorkerLocation
    const navigator: WorkerNavigator
    let onactivate: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any
    let onfetch: (this: ServiceWorkerGlobalScope, ev: FetchEvent) => any
    let oninstall: (this: ServiceWorkerGlobalScope, ev: ExtendableEvent) => any
    let onmessage: (this: ServiceWorkerGlobalScope, ev: ExtendableMessageEvent) => any
    let onmessageerror: (this: ServiceWorkerGlobalScope, ev: MessageEvent) => any
    let onnotificationclick: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any
    let onnotificationclose: (this: ServiceWorkerGlobalScope, ev: NotificationEvent) => any
    let onpush: (this: ServiceWorkerGlobalScope, ev: PushEvent) => any
    let onpushsubscriptionchange: (this: ServiceWorkerGlobalScope, ev: PushSubscriptionChangeEvent) => any
    let onsync: (this: ServiceWorkerGlobalScope, ev: SyncEvent) => any
    // let onbackgroundfetchabort
    // let onbackgroundfetchclick
    // let onbackgroundfetchfail
    // let onbackgroundfetchsuccess

    const origin: string
    const performance: Performance
    const registration: ServiceWorkerRegistration
    const self: ServiceWorkerGlobalScope & typeof globalThis
    const serviceWorker: ServiceWorker
    function importScripts(...urls: string[]): void
    function skipWaiting(): Promise<void>
    function addEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    function removeEventListener<K extends keyof ServiceWorkerGlobalScopeEventMap>(type: K, listener: (this: ServiceWorkerGlobalScope, ev: ServiceWorkerGlobalScopeEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    function dispatchEvent(event: Event): boolean
    function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>
    function atob(data: string): string
    function btoa(data: string): string
    function queueMicrotask(callback: VoidFunction): void
    function setInterval<A extends any[]>(handler: (...args: A) => void, timeout?: number, ...arguments: A): number
    function setTimeout<A extends any[]>(handler: (...args: A) => void, timeout?: number, ...arguments: A): number
    function createImageBitmap(image: ImageBitmapSource, options?: ImageBitmapOptions): Promise<ImageBitmap>
    function createImageBitmap(image: ImageBitmapSource, sx: number, sy: number, sw: number, sh: number, options?: ImageBitmapOptions): Promise<ImageBitmap>
    // const trustedTypes
    // const fonts
    const AbortController: {
        prototype: AbortController
        new(): AbortController
    }
    // const AbortPaymentEvent
    const AbortSignal: {
        prototype: AbortSignal
        new(): AbortSignal
    }
    // const AggregateError
    // const BarcodeDetector
    const Blob: {
        prototype: Blob
        new(blobParts?: BlobPart[], options?: BlobPropertyBag): Blob
    }
    const BroadcastChannel: {
        prototype: BroadcastChannel
        new(name: string): BroadcastChannel
    }
    const ByteLengthQueuingStrategy: {
        prototype: ByteLengthQueuingStrategy
        new(options: { highWaterMark: number }): ByteLengthQueuingStrategy
    }
    // const CSSSkewX
    // const CSSSkewY
    const Cache: {
        prototype: Cache
        new(): Cache
    }
    const CacheStorage: {
        prototype: CacheStorage
        new(): CacheStorage
    }
    // const CanMakePaymentEvent
    const CanvasGradient: {
        prototype: CanvasGradient
        new(): CanvasGradient
    }
    const CanvasPattern: {
        prototype: CanvasPattern
        new(): CanvasPattern
    }
    const Client: {
        prototype: Client
        new(): Client
    }
    const Clients: {
        prototype: Clients
        new(): Clients
    }
    const CloseEvent: {
        prototype: CloseEvent
        new(type: string, eventInitDict?: CloseEventInit): CloseEvent
    }
    // const CompressionStream
    // const DecompressionStream
    const CountQueuingStrategy: {
        prototype: CountQueuingStrategy
        new(options: { highWaterMark: number }): CountQueuingStrategy
    }
    const Crypto: {
        prototype: Crypto
        new(): Crypto
    }
    const CryptoKey: {
        prototype: CryptoKey
        new(): CryptoKey
    }
    const CustomEvent: {
        prototype: CustomEvent
        new <T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>
    }
    const DOMException: {
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
    const DOMMatrix: {
        prototype: DOMMatrix
        new(init?: string | number[]): DOMMatrix
        fromFloat32Array(array32: Float32Array): DOMMatrix
        fromFloat64Array(array64: Float64Array): DOMMatrix
        fromMatrix(other?: DOMMatrixInit): DOMMatrix
    }
    const DOMMatrixReadOnly: {
        prototype: DOMMatrixReadOnly
        new(init?: string | number[]): DOMMatrixReadOnly
        fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly
        fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly
        fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly
    }
    const DOMPoint: {
        prototype: DOMPoint
        new(x?: number, y?: number, z?: number, w?: number): DOMPoint
        fromPoint(other?: DOMPointInit): DOMPoint
    }
    const DOMPointReadOnly: {
        prototype: DOMPointReadOnly
        new(x?: number, y?: number, z?: number, w?: number): DOMPointReadOnly
        fromPoint(other?: DOMPointInit): DOMPointReadOnly
    }
    const DOMQuad: {
        prototype: DOMQuad
        new(p1?: DOMPointInit, p2?: DOMPointInit, p3?: DOMPointInit, p4?: DOMPointInit): DOMQuad
        fromQuad(other?: DOMQuadInit): DOMQuad
        fromRect(other?: DOMRectInit): DOMQuad
    }
    const DOMRect: {
        prototype: DOMRect
        new(x?: number, y?: number, width?: number, height?: number): DOMRect
        fromRect(other?: DOMRectInit): DOMRect
    }
    const DOMRectReadOnly: {
        prototype: DOMRectReadOnly
        new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly
        fromRect(other?: DOMRectInit): DOMRectReadOnly
    }
    const DOMStringList: {
        prototype: DOMStringList
        new(): DOMStringList
    }
    const ErrorEvent: {
        prototype: ErrorEvent
        new(type: string, eventInitDict?: ErrorEventInit): ErrorEvent
    }
    const Event: {
        prototype: Event
        new(type: string, eventInitDict?: EventInit): Event
        readonly AT_TARGET: number
        readonly BUBBLING_PHASE: number
        readonly CAPTURING_PHASE: number
        readonly NONE: number
    }
    const EventSource: {
        prototype: EventSource
        new(url: string, eventSourceInitDict?: EventSourceInit): EventSource
        readonly CLOSED: number
        readonly CONNECTING: number
        readonly OPEN: number
    }
    const EventTarget: {
        prototype: EventTarget
        new(): EventTarget
    }
    const ExtendableEvent: {
        prototype: ExtendableEvent
        new(type: string, eventInitDict?: ExtendableEventInit): ExtendableEvent
    }
    const ExtendableMessageEvent: {
        prototype: ExtendableMessageEvent
        new(type: string, eventInitDict?: ExtendableMessageEventInit): ExtendableMessageEvent
    }
    const FetchEvent: {
        prototype: FetchEvent
        new(type: string, eventInitDict: FetchEventInit): FetchEvent
    }
    const File: {
        prototype: File
        new(fileBits: BlobPart[], fileName: string, options?: FilePropertyBag): File
    }
    const FileList: {
        prototype: FileList
        new(): FileList
    }
    const FileReader: {
        prototype: FileReader
        new(): FileReader
        readonly DONE: number
        readonly EMPTY: number
        readonly LOADING: number
    }
    // const FinalizationRegistry
    // const FontFace
    const FormData: {
        prototype: FormData
        new(): FormData
    }
    const Headers: {
        prototype: Headers
        new(init?: HeadersInit): Headers
    }
    const IDBCursor: {
        prototype: IDBCursor
        new(): IDBCursor
    }
    const IDBCursorWithValue: {
        prototype: IDBCursorWithValue
        new(): IDBCursorWithValue
    }
    const IDBDatabase: {
        prototype: IDBDatabase
        new(): IDBDatabase
    }
    const IDBFactory: {
        prototype: IDBFactory
        new(): IDBFactory
    }
    const IDBIndex: {
        prototype: IDBIndex
        new(): IDBIndex
    }
    const IDBKeyRange: {
        prototype: IDBKeyRange
        new(): IDBKeyRange
        bound(lower: any, upper: any, lowerOpen?: boolean, upperOpen?: boolean): IDBKeyRange
        lowerBound(lower: any, open?: boolean): IDBKeyRange
        only(value: any): IDBKeyRange
        upperBound(upper: any, open?: boolean): IDBKeyRange
    }
    const IDBObjectStore: {
        prototype: IDBObjectStore
        new(): IDBObjectStore
    }
    const IDBOpenDBRequest: {
        prototype: IDBOpenDBRequest
        new(): IDBOpenDBRequest
    }
    const IDBRequest: {
        prototype: IDBRequest
        new(): IDBRequest
    }
    const IDBTransaction: {
        prototype: IDBTransaction
        new(): IDBTransaction
    }
    const IDBVersionChangeEvent: {
        prototype: IDBVersionChangeEvent
        new(type: string, eventInitDict?: IDBVersionChangeEventInit): IDBVersionChangeEvent
    }
    const ImageBitmap: {
        prototype: ImageBitmap
        new(): ImageBitmap
    }
    const ImageBitmapRenderingContext: {
        prototype: ImageBitmapRenderingContext
        new(): ImageBitmapRenderingContext
    }
    const ImageData: {
        prototype: ImageData
        new(width: number, height: number): ImageData
        new(array: Uint8ClampedArray, width: number, height?: number): ImageData
    }
    // const InstallEvent
    // const Intl
    // const Lock
    // const LockManager
    // const MediaCapabilities
    const MessageChannel: {
        prototype: MessageChannel
        new(): MessageChannel
    }
    const MessageEvent: {
        prototype: MessageEvent
        new(type: string, eventInitDict?: MessageEventInit): MessageEvent
    }
    const MessagePort: {
        prototype: MessagePort
        new(): MessagePort
    }
    // const NetworkInformation
    const NavigationPreloadManager: {
        prototype: NavigationPreloadManager
        new(): NavigationPreloadManager
    }
    const Notification: {
        prototype: Notification
        new(title: string, options?: NotificationOptions): Notification
        readonly maxActions: number
        readonly permission: NotificationPermission
    }
    const NotificationEvent: {
        prototype: NotificationEvent
        new(type: string, eventInitDict: NotificationEventInit): NotificationEvent
    }
    const OffscreenCanvas: {
        prototype: OffscreenCanvas
        new(width: number, height: number): OffscreenCanvas
    }
    const OffscreenCanvasRenderingContext2D: {
        prototype: OffscreenCanvasRenderingContext2D
        new(): OffscreenCanvasRenderingContext2D
    }
    const Path2D: {
        prototype: Path2D
        new(path?: Path2D | string): Path2D
    }
    // const PaymentInstruments
    // const PaymentRequestEvent
    const Performance: {
        prototype: Performance
        new(): Performance
    }
    const PerformanceEntry: {
        prototype: PerformanceEntry
        new(): PerformanceEntry
    }
    const PerformanceMark: {
        prototype: PerformanceMark
        new(): PerformanceMark
    }
    const PerformanceMeasure: {
        prototype: PerformanceMeasure
        new(): PerformanceMeasure
    }
    const PerformanceObserver: {
        prototype: PerformanceObserver
        new(callback: PerformanceObserverCallback): PerformanceObserver
        readonly supportedEntryTypes: ReadonlyArray<string>
    }
    const PerformanceObserverEntryList: {
        prototype: PerformanceObserverEntryList
        new(): PerformanceObserverEntryList
    }
    const PerformanceResourceTiming: {
        prototype: PerformanceResourceTiming
        new(): PerformanceResourceTiming
    }
    // const PerformanceServerTiming
    // const PeriodicSyncEvent
    // const PeriodicSyncManager
    const PermissionStatus: {
        prototype: PermissionStatus
        new(): PermissionStatus
    }
    const Permissions: {
        prototype: Permissions
        new(): Permissions
    }
    const PromiseRejectionEvent: {
        prototype: PromiseRejectionEvent
        new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent
    }
    const PushEvent: {
        prototype: PushEvent
        new(type: string, eventInitDict?: PushEventInit): PushEvent
    }
    const PushManager: {
        prototype: PushManager
        new(): PushManager
        readonly supportedContentEncodings: ReadonlyArray<string>
    }
    const PushMessageData: {
        prototype: PushMessageData
        new(): PushMessageData
    }
    const PushSubscription: {
        prototype: PushSubscription
        new(): PushSubscription
    }
    const PushSubscriptionOptions: {
        prototype: PushSubscriptionOptions
        new(): PushSubscriptionOptions
    }
    const ReadableStream: {
        prototype: ReadableStream
        new(underlyingSource: UnderlyingByteSource, strategy?: { highWaterMark?: number, size?: undefined }): ReadableStream<Uint8Array>
        new <R = any>(underlyingSource?: UnderlyingSource<R>, strategy?: QueuingStrategy<R>): ReadableStream<R>
    }
    const ReadableStreamReader: {
        prototype: ReadableStreamReader
        new(): ReadableStreamReader
    }
    // const ReportingObserver
    // const SecurityPolicyViolationEvent
    const Request: {
        prototype: Request
        new(input: RequestInfo, init?: RequestInit): Request
    }
    const Response: {
        prototype: Response
        new(body?: BodyInit | null, init?: ResponseInit): Response
        error(): Response
        redirect(url: string, status?: number): Response
    }
    const ServiceWorker: {
        prototype: ServiceWorker
        new(): ServiceWorker
    }
    const ServiceWorkerGlobalScope: {
        prototype: ServiceWorkerGlobalScope
        new(): ServiceWorkerGlobalScope
    }
    const ServiceWorkerRegistration: {
        prototype: ServiceWorkerRegistration
        new(): ServiceWorkerRegistration
    }
    const StorageManager: {
        prototype: StorageManager
        new(): StorageManager
    }
    const SubtleCrypto: {
        prototype: SubtleCrypto
        new(): SubtleCrypto
    }
    const SyncEvent: {
        prototype: SyncEvent
        new(type: string, init: SyncEventInit): SyncEvent
    }
    const SyncManager: {
        prototype: SyncManager
        new(): SyncManager
    }
    const TextDecoder: {
        prototype: TextDecoder
        new(label?: string, options?: TextDecoderOptions): TextDecoder
    }
    const TextDecoderStream: {
        prototype: TextDecoderStream
        new(label?: string, options?: TextDecoderOptions): TextDecoderStream
    }
    const TextEncoder: {
        prototype: TextEncoder
        new(): TextEncoder
    }
    const TextEncoderStream: {
        prototype: TextEncoderStream
        new(): TextEncoderStream
    }
    const TextMetrics: {
        prototype: TextMetrics
        new(): TextMetrics
    }
    const TransformStream: {
        prototype: TransformStream
        new <I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>
    }
    // const TrustedTypePolicyFactory
    const URL: {
        prototype: URL
        new(url: string, base?: string | URL): URL
        createObjectURL(object: any): string
        revokeObjectURL(url: string): void
    }
    const URLSearchParams: {
        prototype: URLSearchParams
        new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams
        toString(): string
    }
    // const UserActivation
    namespace WebAssembly {
        interface Global {
            value: any
            valueOf(): any
        }

        const Global: {
            prototype: Global
            new(descriptor: GlobalDescriptor, v?: any): Global
        }

        interface Instance {
            readonly exports: Exports
        }

        const Instance: {
            prototype: Instance
            new(module: Module, importObject?: Imports): Instance
        }

        interface Memory {
            readonly buffer: ArrayBuffer
            grow(delta: number): number
        }

        const Memory: {
            prototype: Memory
            new(descriptor: MemoryDescriptor): Memory
        }

        interface Module {
        }

        const Module: {
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

        const Table: {
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
    const WebGL2RenderingContext: {
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
        readonly MAX_constYING_VECTORS: GLenum
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
        readonly MAX_constYING_COMPONENTS: GLenum
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
        readonly TRANSFORM_FEEDBACK_constYINGS: GLenum
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
    const WebGLActiveInfo: {
        prototype: WebGLActiveInfo
        new(): WebGLActiveInfo
    }
    const WebGLBuffer: {
        prototype: WebGLBuffer
        new(): WebGLBuffer
    }
    const WebGLFramebuffer: {
        prototype: WebGLFramebuffer
        new(): WebGLFramebuffer
    }
    const WebGLProgram: {
        prototype: WebGLProgram
        new(): WebGLProgram
    }
    const WebGLQuery: {
        prototype: WebGLQuery
        new(): WebGLQuery
    }
    const WebGLRenderbuffer: {
        prototype: WebGLRenderbuffer
        new(): WebGLRenderbuffer
    }
    const WebGLRenderingContext: {
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
    const WebGLSampler: {
        prototype: WebGLSampler
        new(): WebGLSampler
    }
    const WebGLShader: {
        prototype: WebGLShader
        new(): WebGLShader
    }
    const WebGLShaderPrecisionFormat: {
        prototype: WebGLShaderPrecisionFormat
        new(): WebGLShaderPrecisionFormat
    }
    const WebGLSync: {
        prototype: WebGLSync
        new(): WebGLSync
    }
    const WebGLTexture: {
        prototype: WebGLTexture
        new(): WebGLTexture
    }
    const WebGLTransformFeedback: {
        prototype: WebGLTransformFeedback
        new(): WebGLTransformFeedback
    }
    const WebGLUniformLocation: {
        prototype: WebGLUniformLocation
        new(): WebGLUniformLocation
    }
    const WebGLVertexArrayObject: {
        prototype: WebGLVertexArrayObject
        new(): WebGLVertexArrayObject
    }
    const WebSocket: {
        prototype: WebSocket
        new(url: string, protocols?: string | string[]): WebSocket
        readonly CLOSED: number
        readonly CLOSING: number
        readonly CONNECTING: number
        readonly OPEN: number
    }
    const WindowClient: {
        prototype: WindowClient
        new(): WindowClient
    }
    const WorkerGlobalScope: {
        prototype: WorkerGlobalScope
        new(): WorkerGlobalScope
    }
    const WorkerLocation: {
        prototype: WorkerLocation
        new(): WorkerLocation
    }
    const WorkerNavigator: {
        prototype: WorkerNavigator
        new(): WorkerNavigator
    }
    const WritableStream: {
        prototype: WritableStream
        new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>
    }
    // const WritableStreamDefaultWriter
    const console: Console
}
