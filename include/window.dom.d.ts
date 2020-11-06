declare namespace window {
    var AbortController: {
        prototype: AbortController
        new(): AbortController
    }
    var AbortSignal: {
        prototype: AbortSignal
        new(): AbortSignal
    }
    var AbstractRange: {
        prototype: AbstractRange
        new(): AbstractRange
    }
    var AnalyserNode: {
        prototype: AnalyserNode
        new(context: BaseAudioContext, options?: AnalyserOptions): AnalyserNode
    }
    var Animation: {
        prototype: Animation
        new(effect?: AnimationEffect | null, timeline?: AnimationTimeline | null): Animation
    }
    var AnimationEffect: {
        prototype: AnimationEffect
        new(): AnimationEffect
    }
    var AnimationEvent: {
        prototype: AnimationEvent
        new(type: string, animationEventInitDict?: AnimationEventInit): AnimationEvent
    }
    var AnimationPlaybackEvent: {
        prototype: AnimationPlaybackEvent
        new(type: string, eventInitDict?: AnimationPlaybackEventInit): AnimationPlaybackEvent
    }
    var AnimationTimeline: {
        prototype: AnimationTimeline
        new(): AnimationTimeline
    }
    var ApplicationCache: {
        prototype: ApplicationCache
        new(): ApplicationCache
        readonly CHECKING: number
        readonly DOWNLOADING: number
        readonly IDLE: number
        readonly OBSOLETE: number
        readonly UNCACHED: number
        readonly UPDATEREADY: number
    }
    var Attr: {
        prototype: Attr
        new(): Attr
    }
    var AudioBuffer: {
        prototype: AudioBuffer
        new(options: AudioBufferOptions): AudioBuffer
    }
    var AudioBufferSourceNode: {
        prototype: AudioBufferSourceNode
        new(context: BaseAudioContext, options?: AudioBufferSourceOptions): AudioBufferSourceNode
    }
    var AudioContext: {
        prototype: AudioContext
        new(contextOptions?: AudioContextOptions): AudioContext
    }
    var AudioDestinationNode: {
        prototype: AudioDestinationNode
        new(): AudioDestinationNode
    }
    var AudioListener: {
        prototype: AudioListener
        new(): AudioListener
    }
    var AudioNode: {
        prototype: AudioNode
        new(): AudioNode
    }
    var AudioParam: {
        prototype: AudioParam
        new(): AudioParam
    }
    var AudioParamMap: {
        prototype: AudioParamMap
        new(): AudioParamMap
    }
    var AudioProcessingEvent: {
        prototype: AudioProcessingEvent
        new(type: string, eventInitDict: AudioProcessingEventInit): AudioProcessingEvent
    }
    var AudioScheduledSourceNode: {
        prototype: AudioScheduledSourceNode
        new(): AudioScheduledSourceNode
    }
    var AudioWorklet: {
        prototype: AudioWorklet
        new(): AudioWorklet
    }
    var AudioWorkletNode: {
        prototype: AudioWorkletNode
        new(context: BaseAudioContext, name: string, options?: AudioWorkletNodeOptions): AudioWorkletNode
    }
    var AuthenticatorAssertionResponse: {
        prototype: AuthenticatorAssertionResponse
        new(): AuthenticatorAssertionResponse
    }
    var AuthenticatorAttestationResponse: {
        prototype: AuthenticatorAttestationResponse
        new(): AuthenticatorAttestationResponse
    }
    var AuthenticatorResponse: {
        prototype: AuthenticatorResponse
        new(): AuthenticatorResponse
    }
    var BarProp: {
        prototype: BarProp
        new(): BarProp
    }
    var BaseAudioContext: {
        prototype: BaseAudioContext
        new(): BaseAudioContext
    }
    var BeforeUnloadEvent: {
        prototype: BeforeUnloadEvent
        new(): BeforeUnloadEvent
    }
    var BhxBrowser: {
        prototype: BhxBrowser
        new(): BhxBrowser
    }
    var BiquadFilterNode: {
        prototype: BiquadFilterNode
        new(context: BaseAudioContext, options?: BiquadFilterOptions): BiquadFilterNode
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
    var CDATASection: {
        prototype: CDATASection
        new(): CDATASection
    }
    var CSSConditionRule: {
        prototype: CSSConditionRule
        new(): CSSConditionRule
    }
    var CSSFontFaceRule: {
        prototype: CSSFontFaceRule
        new(): CSSFontFaceRule
    }
    var CSSGroupingRule: {
        prototype: CSSGroupingRule
        new(): CSSGroupingRule
    }
    var CSSImportRule: {
        prototype: CSSImportRule
        new(): CSSImportRule
    }
    var CSSKeyframeRule: {
        prototype: CSSKeyframeRule
        new(): CSSKeyframeRule
    }
    var CSSKeyframesRule: {
        prototype: CSSKeyframesRule
        new(): CSSKeyframesRule
    }
    var CSSMediaRule: {
        prototype: CSSMediaRule
        new(): CSSMediaRule
    }
    var CSSNamespaceRule: {
        prototype: CSSNamespaceRule
        new(): CSSNamespaceRule
    }
    var CSSPageRule: {
        prototype: CSSPageRule
        new(): CSSPageRule
    }
    var CSSRule: {
        prototype: CSSRule
        new(): CSSRule
        readonly CHARSET_RULE: number
        readonly FONT_FACE_RULE: number
        readonly IMPORT_RULE: number
        readonly KEYFRAMES_RULE: number
        readonly KEYFRAME_RULE: number
        readonly MEDIA_RULE: number
        readonly NAMESPACE_RULE: number
        readonly PAGE_RULE: number
        readonly STYLE_RULE: number
        readonly SUPPORTS_RULE: number
    }
    var CSSRuleList: {
        prototype: CSSRuleList
        new(): CSSRuleList
    }
    var CSSStyleDeclaration: {
        prototype: CSSStyleDeclaration
        new(): CSSStyleDeclaration
    }
    var CSSStyleRule: {
        prototype: CSSStyleRule
        new(): CSSStyleRule
    }
    var CSSStyleSheet: {
        prototype: CSSStyleSheet
        new(): CSSStyleSheet
    }
    var CSSSupportsRule: {
        prototype: CSSSupportsRule
        new(): CSSSupportsRule
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
    var CanvasRenderingContext2D: {
        prototype: CanvasRenderingContext2D
        new(): CanvasRenderingContext2D
    }
    var CaretPosition: {
        prototype: CaretPosition
        new(): CaretPosition
    }
    var ChannelMergerNode: {
        prototype: ChannelMergerNode
        new(context: BaseAudioContext, options?: ChannelMergerOptions): ChannelMergerNode
    }
    var ChannelSplitterNode: {
        prototype: ChannelSplitterNode
        new(context: BaseAudioContext, options?: ChannelSplitterOptions): ChannelSplitterNode
    }
    var CharacterData: {
        prototype: CharacterData
        new(): CharacterData
    }
    var ClientRect: {
        prototype: ClientRect
        new(): ClientRect
    }
    var ClientRectList: {
        prototype: ClientRectList
        new(): ClientRectList
    }
    var Clipboard: {
        prototype: Clipboard
        new(): Clipboard
    }
    var ClipboardEvent: {
        prototype: ClipboardEvent
        new(type: string, eventInitDict?: ClipboardEventInit): ClipboardEvent
    }
    var CloseEvent: {
        prototype: CloseEvent
        new(type: string, eventInitDict?: CloseEventInit): CloseEvent
    }
    var Comment: {
        prototype: Comment
        new(data?: string): Comment
    }
    var CompositionEvent: {
        prototype: CompositionEvent
        new(type: string, eventInitDict?: CompositionEventInit): CompositionEvent
    }
    var ConstantSourceNode: {
        prototype: ConstantSourceNode
        new(context: BaseAudioContext, options?: ConstantSourceOptions): ConstantSourceNode
    }
    var ConvolverNode: {
        prototype: ConvolverNode
        new(context: BaseAudioContext, options?: ConvolverOptions): ConvolverNode
    }
    var CountQueuingStrategy: {
        prototype: CountQueuingStrategy
        new(options: { highWaterMark: number }): CountQueuingStrategy
    }
    var Credential: {
        prototype: Credential
        new(): Credential
    }
    var CredentialsContainer: {
        prototype: CredentialsContainer
        new(): CredentialsContainer
    }
    var Crypto: {
        prototype: Crypto
        new(): Crypto
    }
    var CryptoKey: {
        prototype: CryptoKey
        new(): CryptoKey
    }
    var CryptoKeyPair: {
        prototype: CryptoKeyPair
        new(): CryptoKeyPair
    }
    var CustomElementRegistry: {
        prototype: CustomElementRegistry
        new(): CustomElementRegistry
    }
    var CustomEvent: {
        prototype: CustomEvent
        new <T>(typeArg: string, eventInitDict?: CustomEventInit<T>): CustomEvent<T>
    }
    var DOMError: {
        prototype: DOMError
        new(): DOMError
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
    var DOMImplementation: {
        prototype: DOMImplementation
        new(): DOMImplementation
    }
    var DOMMatrix: {
        prototype: DOMMatrix
        new(init?: string | number[]): DOMMatrix
        fromFloat32Array(array32: Float32Array): DOMMatrix
        fromFloat64Array(array64: Float64Array): DOMMatrix
        fromMatrix(other?: DOMMatrixInit): DOMMatrix
    }
    var SVGMatrix: typeof DOMMatrix
    var WebKitCSSMatrix: typeof DOMMatrix
    var DOMMatrixReadOnly: {
        prototype: DOMMatrixReadOnly
        new(init?: string | number[]): DOMMatrixReadOnly
        fromFloat32Array(array32: Float32Array): DOMMatrixReadOnly
        fromFloat64Array(array64: Float64Array): DOMMatrixReadOnly
        fromMatrix(other?: DOMMatrixInit): DOMMatrixReadOnly
        toString(): string
    }
    var DOMParser: {
        prototype: DOMParser
        new(): DOMParser
    }
    var DOMPoint: {
        prototype: DOMPoint
        new(x?: number, y?: number, z?: number, w?: number): DOMPoint
        fromPoint(other?: DOMPointInit): DOMPoint
    }
    var SVGPoint: typeof DOMPoint
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
    var SVGRect: typeof DOMRect
    var DOMRectList: {
        prototype: DOMRectList
        new(): DOMRectList
    }
    var DOMRectReadOnly: {
        prototype: DOMRectReadOnly
        new(x?: number, y?: number, width?: number, height?: number): DOMRectReadOnly
        fromRect(other?: DOMRectInit): DOMRectReadOnly
    }
    var DOMSettableTokenList: {
        prototype: DOMSettableTokenList
        new(): DOMSettableTokenList
    }
    var DOMStringList: {
        prototype: DOMStringList
        new(): DOMStringList
    }
    var DOMStringMap: {
        prototype: DOMStringMap
        new(): DOMStringMap
    }
    var DOMTokenList: {
        prototype: DOMTokenList
        new(): DOMTokenList
    }
    var DataCue: {
        prototype: DataCue
        new(): DataCue
    }
    var DataTransfer: {
        prototype: DataTransfer
        new(): DataTransfer
    }
    var DataTransferItem: {
        prototype: DataTransferItem
        new(): DataTransferItem
    }
    var DataTransferItemList: {
        prototype: DataTransferItemList
        new(): DataTransferItemList
    }
    var DeferredPermissionRequest: {
        prototype: DeferredPermissionRequest
        new(): DeferredPermissionRequest
    }
    var DelayNode: {
        prototype: DelayNode
        new(context: BaseAudioContext, options?: DelayOptions): DelayNode
    }
    var DeviceAcceleration: {
        prototype: DeviceAcceleration
        new(): DeviceAcceleration
    }
    var DeviceLightEvent: {
        prototype: DeviceLightEvent
        new(typeArg: string, eventInitDict?: DeviceLightEventInit): DeviceLightEvent
    }
    var DeviceMotionEvent: {
        prototype: DeviceMotionEvent
        new(type: string, eventInitDict?: DeviceMotionEventInit): DeviceMotionEvent
        requestPermission(): Promise<PermissionState>
    }
    var DeviceOrientationEvent: {
        prototype: DeviceOrientationEvent
        new(type: string, eventInitDict?: DeviceOrientationEventInit): DeviceOrientationEvent
        requestPermission(): Promise<PermissionState>
    }
    var DeviceRotationRate: {
        prototype: DeviceRotationRate
        new(): DeviceRotationRate
    }
    var Document: {
        prototype: Document
        new(): Document
    }
    var DocumentFragment: {
        prototype: DocumentFragment
        new(): DocumentFragment
    }
    var DocumentTimeline: {
        prototype: DocumentTimeline
        new(options?: DocumentTimelineOptions): DocumentTimeline
    }
    var DocumentType: {
        prototype: DocumentType
        new(): DocumentType
    }
    var DragEvent: {
        prototype: DragEvent
        new(type: string, eventInitDict?: DragEventInit): DragEvent
    }
    var DynamicsCompressorNode: {
        prototype: DynamicsCompressorNode
        new(context: BaseAudioContext, options?: DynamicsCompressorOptions): DynamicsCompressorNode
    }
    var Element: {
        prototype: Element
        new(): Element
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
    var ExtensionScriptApis: {
        prototype: ExtensionScriptApis
        new(): ExtensionScriptApis
    }
    var External: {
        prototype: External
        new(): External
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
    var FocusEvent: {
        prototype: FocusEvent
        new(type: string, eventInitDict?: FocusEventInit): FocusEvent
    }
    var FocusNavigationEvent: {
        prototype: FocusNavigationEvent
        new(type: string, eventInitDict?: FocusNavigationEventInit): FocusNavigationEvent
    }
    var FormData: {
        prototype: FormData
        new(form?: HTMLFormElement): FormData
    }
    var GainNode: {
        prototype: GainNode
        new(context: BaseAudioContext, options?: GainOptions): GainNode
    }
    var Gamepad: {
        prototype: Gamepad
        new(): Gamepad
    }
    var GamepadButton: {
        prototype: GamepadButton
        new(): GamepadButton
    }
    var GamepadEvent: {
        prototype: GamepadEvent
        new(type: string, eventInitDict: GamepadEventInit): GamepadEvent
    }
    var GamepadHapticActuator: {
        prototype: GamepadHapticActuator
        new(): GamepadHapticActuator
    }
    var GamepadPose: {
        prototype: GamepadPose
        new(): GamepadPose
    }
    var HTMLAllCollection: {
        prototype: HTMLAllCollection
        new(): HTMLAllCollection
    }
    var HTMLAnchorElement: {
        prototype: HTMLAnchorElement
        new(): HTMLAnchorElement
    }
    var HTMLAppletElement: {
        prototype: HTMLAppletElement
        new(): HTMLAppletElement
    }
    var HTMLAreaElement: {
        prototype: HTMLAreaElement
        new(): HTMLAreaElement
    }
    var HTMLAudioElement: {
        prototype: HTMLAudioElement
        new(): HTMLAudioElement
    }
    var HTMLBRElement: {
        prototype: HTMLBRElement
        new(): HTMLBRElement
    }
    var HTMLBaseElement: {
        prototype: HTMLBaseElement
        new(): HTMLBaseElement
    }
    var HTMLBaseFontElement: {
        prototype: HTMLBaseFontElement
        new(): HTMLBaseFontElement
    }
    var HTMLBodyElement: {
        prototype: HTMLBodyElement
        new(): HTMLBodyElement
    }
    var HTMLButtonElement: {
        prototype: HTMLButtonElement
        new(): HTMLButtonElement
    }
    var HTMLCanvasElement: {
        prototype: HTMLCanvasElement
        new(): HTMLCanvasElement
    }
    var HTMLCollection: {
        prototype: HTMLCollection
        new(): HTMLCollection
    }
    var HTMLDListElement: {
        prototype: HTMLDListElement
        new(): HTMLDListElement
    }
    var HTMLDataElement: {
        prototype: HTMLDataElement
        new(): HTMLDataElement
    }
    var HTMLDataListElement: {
        prototype: HTMLDataListElement
        new(): HTMLDataListElement
    }
    var HTMLDetailsElement: {
        prototype: HTMLDetailsElement
        new(): HTMLDetailsElement
    }
    var HTMLDialogElement: {
        prototype: HTMLDialogElement
        new(): HTMLDialogElement
    }
    var HTMLDirectoryElement: {
        prototype: HTMLDirectoryElement
        new(): HTMLDirectoryElement
    }
    var HTMLDivElement: {
        prototype: HTMLDivElement
        new(): HTMLDivElement
    }
    var HTMLDocument: {
        prototype: HTMLDocument
        new(): HTMLDocument
    }
    var HTMLElement: {
        prototype: HTMLElement
        new(): HTMLElement
    }
    var HTMLEmbedElement: {
        prototype: HTMLEmbedElement
        new(): HTMLEmbedElement
    }
    var HTMLFieldSetElement: {
        prototype: HTMLFieldSetElement
        new(): HTMLFieldSetElement
    }
    var HTMLFontElement: {
        prototype: HTMLFontElement
        new(): HTMLFontElement
    }
    var HTMLFormControlsCollection: {
        prototype: HTMLFormControlsCollection
        new(): HTMLFormControlsCollection
    }
    var HTMLFormElement: {
        prototype: HTMLFormElement
        new(): HTMLFormElement
    }
    var HTMLFrameElement: {
        prototype: HTMLFrameElement
        new(): HTMLFrameElement
    }
    var HTMLFrameSetElement: {
        prototype: HTMLFrameSetElement
        new(): HTMLFrameSetElement
    }
    var HTMLHRElement: {
        prototype: HTMLHRElement
        new(): HTMLHRElement
    }
    var HTMLHeadElement: {
        prototype: HTMLHeadElement
        new(): HTMLHeadElement
    }
    var HTMLHeadingElement: {
        prototype: HTMLHeadingElement
        new(): HTMLHeadingElement
    }
    var HTMLHtmlElement: {
        prototype: HTMLHtmlElement
        new(): HTMLHtmlElement
    }
    var HTMLIFrameElement: {
        prototype: HTMLIFrameElement
        new(): HTMLIFrameElement
    }
    var HTMLImageElement: {
        prototype: HTMLImageElement
        new(): HTMLImageElement
    }
    var HTMLInputElement: {
        prototype: HTMLInputElement
        new(): HTMLInputElement
    }
    var HTMLLIElement: {
        prototype: HTMLLIElement
        new(): HTMLLIElement
    }
    var HTMLLabelElement: {
        prototype: HTMLLabelElement
        new(): HTMLLabelElement
    }
    var HTMLLegendElement: {
        prototype: HTMLLegendElement
        new(): HTMLLegendElement
    }
    var HTMLLinkElement: {
        prototype: HTMLLinkElement
        new(): HTMLLinkElement
    }
    var HTMLMapElement: {
        prototype: HTMLMapElement
        new(): HTMLMapElement
    }
    var HTMLMarqueeElement: {
        prototype: HTMLMarqueeElement
        new(): HTMLMarqueeElement
    }
    var HTMLMediaElement: {
        prototype: HTMLMediaElement
        new(): HTMLMediaElement
        readonly HAVE_CURRENT_DATA: number
        readonly HAVE_ENOUGH_DATA: number
        readonly HAVE_FUTURE_DATA: number
        readonly HAVE_METADATA: number
        readonly HAVE_NOTHING: number
        readonly NETWORK_EMPTY: number
        readonly NETWORK_IDLE: number
        readonly NETWORK_LOADING: number
        readonly NETWORK_NO_SOURCE: number
    }
    var HTMLMenuElement: {
        prototype: HTMLMenuElement
        new(): HTMLMenuElement
    }
    var HTMLMetaElement: {
        prototype: HTMLMetaElement
        new(): HTMLMetaElement
    }
    var HTMLMeterElement: {
        prototype: HTMLMeterElement
        new(): HTMLMeterElement
    }
    var HTMLModElement: {
        prototype: HTMLModElement
        new(): HTMLModElement
    }
    var HTMLOListElement: {
        prototype: HTMLOListElement
        new(): HTMLOListElement
    }
    var HTMLObjectElement: {
        prototype: HTMLObjectElement
        new(): HTMLObjectElement
    }
    var HTMLOptGroupElement: {
        prototype: HTMLOptGroupElement
        new(): HTMLOptGroupElement
    }
    var HTMLOptionElement: {
        prototype: HTMLOptionElement
        new(): HTMLOptionElement
    }
    var HTMLOptionsCollection: {
        prototype: HTMLOptionsCollection
        new(): HTMLOptionsCollection
    }
    var HTMLOutputElement: {
        prototype: HTMLOutputElement
        new(): HTMLOutputElement
    }
    var HTMLParagraphElement: {
        prototype: HTMLParagraphElement
        new(): HTMLParagraphElement
    }
    var HTMLParamElement: {
        prototype: HTMLParamElement
        new(): HTMLParamElement
    }
    var HTMLPictureElement: {
        prototype: HTMLPictureElement
        new(): HTMLPictureElement
    }
    var HTMLPreElement: {
        prototype: HTMLPreElement
        new(): HTMLPreElement
    }
    var HTMLProgressElement: {
        prototype: HTMLProgressElement
        new(): HTMLProgressElement
    }
    var HTMLQuoteElement: {
        prototype: HTMLQuoteElement
        new(): HTMLQuoteElement
    }
    var HTMLScriptElement: {
        prototype: HTMLScriptElement
        new(): HTMLScriptElement
    }
    var HTMLSelectElement: {
        prototype: HTMLSelectElement
        new(): HTMLSelectElement
    }
    var HTMLSlotElement: {
        prototype: HTMLSlotElement
        new(): HTMLSlotElement
    }
    var HTMLSourceElement: {
        prototype: HTMLSourceElement
        new(): HTMLSourceElement
    }
    var HTMLSpanElement: {
        prototype: HTMLSpanElement
        new(): HTMLSpanElement
    }
    var HTMLStyleElement: {
        prototype: HTMLStyleElement
        new(): HTMLStyleElement
    }
    var HTMLTableCaptionElement: {
        prototype: HTMLTableCaptionElement
        new(): HTMLTableCaptionElement
    }
    var HTMLTableCellElement: {
        prototype: HTMLTableCellElement
        new(): HTMLTableCellElement
    }
    var HTMLTableColElement: {
        prototype: HTMLTableColElement
        new(): HTMLTableColElement
    }
    var HTMLTableDataCellElement: {
        prototype: HTMLTableDataCellElement
        new(): HTMLTableDataCellElement
    }
    var HTMLTableElement: {
        prototype: HTMLTableElement
        new(): HTMLTableElement
    }
    var HTMLTableHeaderCellElement: {
        prototype: HTMLTableHeaderCellElement
        new(): HTMLTableHeaderCellElement
    }
    var HTMLTableRowElement: {
        prototype: HTMLTableRowElement
        new(): HTMLTableRowElement
    }
    var HTMLTableSectionElement: {
        prototype: HTMLTableSectionElement
        new(): HTMLTableSectionElement
    }
    var HTMLTemplateElement: {
        prototype: HTMLTemplateElement
        new(): HTMLTemplateElement
    }
    var HTMLTextAreaElement: {
        prototype: HTMLTextAreaElement
        new(): HTMLTextAreaElement
    }
    var HTMLTimeElement: {
        prototype: HTMLTimeElement
        new(): HTMLTimeElement
    }
    var HTMLTitleElement: {
        prototype: HTMLTitleElement
        new(): HTMLTitleElement
    }
    var HTMLTrackElement: {
        prototype: HTMLTrackElement
        new(): HTMLTrackElement
        readonly ERROR: number
        readonly LOADED: number
        readonly LOADING: number
        readonly NONE: number
    }
    var HTMLUListElement: {
        prototype: HTMLUListElement
        new(): HTMLUListElement
    }
    var HTMLUnknownElement: {
        prototype: HTMLUnknownElement
        new(): HTMLUnknownElement
    }
    var HTMLVideoElement: {
        prototype: HTMLVideoElement
        new(): HTMLVideoElement
    }
    var HashChangeEvent: {
        prototype: HashChangeEvent
        new(type: string, eventInitDict?: HashChangeEventInit): HashChangeEvent
    }
    var Headers: {
        prototype: Headers
        new(init?: HeadersInit): Headers
    }
    var History: {
        prototype: History
        new(): History
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
    var IIRFilterNode: {
        prototype: IIRFilterNode
        new(context: BaseAudioContext, options: IIRFilterOptions): IIRFilterNode
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
    var InputDeviceInfo: {
        prototype: InputDeviceInfo
        new(): InputDeviceInfo
    }
    var InputEvent: {
        prototype: InputEvent
        new(type: string, eventInitDict?: InputEventInit): InputEvent
    }
    var IntersectionObserver: {
        prototype: IntersectionObserver
        new(callback: IntersectionObserverCallback, options?: IntersectionObserverInit): IntersectionObserver
    }
    var IntersectionObserverEntry: {
        prototype: IntersectionObserverEntry
        new(intersectionObserverEntryInit: IntersectionObserverEntryInit): IntersectionObserverEntry
    }
    var KeyboardEvent: {
        prototype: KeyboardEvent
        new(type: string, eventInitDict?: KeyboardEventInit): KeyboardEvent
        readonly DOM_KEY_LOCATION_LEFT: number
        readonly DOM_KEY_LOCATION_NUMPAD: number
        readonly DOM_KEY_LOCATION_RIGHT: number
        readonly DOM_KEY_LOCATION_STANDARD: number
    }
    var KeyframeEffect: {
        prototype: KeyframeEffect
        new(target: Element | null, keyframes: Keyframe[] | PropertyIndexedKeyframes | null, options?: number | KeyframeEffectOptions): KeyframeEffect
        new(source: KeyframeEffect): KeyframeEffect
    }
    var ListeningStateChangedEvent: {
        prototype: ListeningStateChangedEvent
        new(): ListeningStateChangedEvent
    }
    var Location: {
        prototype: Location
        new(): Location
    }
    var MSAssertion: {
        prototype: MSAssertion
        new(): MSAssertion
    }
    var MSBlobBuilder: {
        prototype: MSBlobBuilder
        new(): MSBlobBuilder
    }
    var MSFIDOCredentialAssertion: {
        prototype: MSFIDOCredentialAssertion
        new(): MSFIDOCredentialAssertion
    }
    var MSFIDOSignature: {
        prototype: MSFIDOSignature
        new(): MSFIDOSignature
    }
    var MSFIDOSignatureAssertion: {
        prototype: MSFIDOSignatureAssertion
        new(): MSFIDOSignatureAssertion
    }
    var MSGesture: {
        prototype: MSGesture
        new(): MSGesture
    }
    var MSGestureEvent: {
        prototype: MSGestureEvent
        new(): MSGestureEvent
        readonly MSGESTURE_FLAG_BEGIN: number
        readonly MSGESTURE_FLAG_CANCEL: number
        readonly MSGESTURE_FLAG_END: number
        readonly MSGESTURE_FLAG_INERTIA: number
        readonly MSGESTURE_FLAG_NONE: number
    }
    var MSGraphicsTrust: {
        prototype: MSGraphicsTrust
        new(): MSGraphicsTrust
    }
    var MSInputMethodContext: {
        prototype: MSInputMethodContext
        new(): MSInputMethodContext
    }
    var MSMediaKeyError: {
        prototype: MSMediaKeyError
        new(): MSMediaKeyError
        readonly MS_MEDIA_KEYERR_CLIENT: number
        readonly MS_MEDIA_KEYERR_DOMAIN: number
        readonly MS_MEDIA_KEYERR_HARDWARECHANGE: number
        readonly MS_MEDIA_KEYERR_OUTPUT: number
        readonly MS_MEDIA_KEYERR_SERVICE: number
        readonly MS_MEDIA_KEYERR_UNKNOWN: number
    }
    var MSMediaKeyMessageEvent: {
        prototype: MSMediaKeyMessageEvent
        new(): MSMediaKeyMessageEvent
    }
    var MSMediaKeyNeededEvent: {
        prototype: MSMediaKeyNeededEvent
        new(): MSMediaKeyNeededEvent
    }
    var MSMediaKeySession: {
        prototype: MSMediaKeySession
        new(): MSMediaKeySession
    }
    var MSMediaKeys: {
        prototype: MSMediaKeys
        new(keySystem: string): MSMediaKeys
        isTypeSupported(keySystem: string, type?: string | null): boolean
        isTypeSupportedWithFeatures(keySystem: string, type?: string | null): string
    }
    var MSPointerEvent: {
        prototype: MSPointerEvent
        new(typeArg: string, eventInitDict?: PointerEventInit): MSPointerEvent
    }
    var MSStream: {
        prototype: MSStream
        new(): MSStream
    }
    var MediaDeviceInfo: {
        prototype: MediaDeviceInfo
        new(): MediaDeviceInfo
    }
    var MediaDevices: {
        prototype: MediaDevices
        new(): MediaDevices
    }
    var MediaElementAudioSourceNode: {
        prototype: MediaElementAudioSourceNode
        new(context: AudioContext, options: MediaElementAudioSourceOptions): MediaElementAudioSourceNode
    }
    var MediaEncryptedEvent: {
        prototype: MediaEncryptedEvent
        new(type: string, eventInitDict?: MediaEncryptedEventInit): MediaEncryptedEvent
    }
    var MediaError: {
        prototype: MediaError
        new(): MediaError
        readonly MEDIA_ERR_ABORTED: number
        readonly MEDIA_ERR_DECODE: number
        readonly MEDIA_ERR_NETWORK: number
        readonly MEDIA_ERR_SRC_NOT_SUPPORTED: number
    }
    var MediaKeyMessageEvent: {
        prototype: MediaKeyMessageEvent
        new(type: string, eventInitDict: MediaKeyMessageEventInit): MediaKeyMessageEvent
    }
    var MediaKeySession: {
        prototype: MediaKeySession
        new(): MediaKeySession
    }
    var MediaKeyStatusMap: {
        prototype: MediaKeyStatusMap
        new(): MediaKeyStatusMap
    }
    var MediaKeySystemAccess: {
        prototype: MediaKeySystemAccess
        new(): MediaKeySystemAccess
    }
    var MediaKeys: {
        prototype: MediaKeys
        new(): MediaKeys
    }
    var MediaList: {
        prototype: MediaList
        new(): MediaList
    }
    var MediaQueryList: {
        prototype: MediaQueryList
        new(): MediaQueryList
    }
    var MediaQueryListEvent: {
        prototype: MediaQueryListEvent
        new(type: string, eventInitDict?: MediaQueryListEventInit): MediaQueryListEvent
    }
    var MediaSource: {
        prototype: MediaSource
        new(): MediaSource
        isTypeSupported(type: string): boolean
    }
    var MediaStream: {
        prototype: MediaStream
        new(): MediaStream
        new(stream: MediaStream): MediaStream
        new(tracks: MediaStreamTrack[]): MediaStream
    }
    var MediaStreamAudioDestinationNode: {
        prototype: MediaStreamAudioDestinationNode
        new(context: AudioContext, options?: AudioNodeOptions): MediaStreamAudioDestinationNode
    }
    var MediaStreamAudioSourceNode: {
        prototype: MediaStreamAudioSourceNode
        new(context: AudioContext, options: MediaStreamAudioSourceOptions): MediaStreamAudioSourceNode
    }
    var MediaStreamError: {
        prototype: MediaStreamError
        new(): MediaStreamError
    }
    var MediaStreamErrorEvent: {
        prototype: MediaStreamErrorEvent
        new(typeArg: string, eventInitDict?: MediaStreamErrorEventInit): MediaStreamErrorEvent
    }
    var MediaStreamEvent: {
        prototype: MediaStreamEvent
        new(type: string, eventInitDict: MediaStreamEventInit): MediaStreamEvent
    }
    var MediaStreamTrack: {
        prototype: MediaStreamTrack
        new(): MediaStreamTrack
    }
    var MediaStreamTrackAudioSourceNode: {
        prototype: MediaStreamTrackAudioSourceNode
        new(context: AudioContext, options: MediaStreamTrackAudioSourceOptions): MediaStreamTrackAudioSourceNode
    }
    var MediaStreamTrackEvent: {
        prototype: MediaStreamTrackEvent
        new(type: string, eventInitDict: MediaStreamTrackEventInit): MediaStreamTrackEvent
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
    var MimeType: {
        prototype: MimeType
        new(): MimeType
    }
    var MimeTypeArray: {
        prototype: MimeTypeArray
        new(): MimeTypeArray
    }
    var MouseEvent: {
        prototype: MouseEvent
        new(type: string, eventInitDict?: MouseEventInit): MouseEvent
    }
    var MutationEvent: {
        prototype: MutationEvent
        new(): MutationEvent
        readonly ADDITION: number
        readonly MODIFICATION: number
        readonly REMOVAL: number
    }
    var MutationObserver: {
        prototype: MutationObserver
        new(callback: MutationCallback): MutationObserver
    }
    var MutationRecord: {
        prototype: MutationRecord
        new(): MutationRecord
    }
    var NamedNodeMap: {
        prototype: NamedNodeMap
        new(): NamedNodeMap
    }
    var NavigationPreloadManager: {
        prototype: NavigationPreloadManager
        new(): NavigationPreloadManager
    }
    var Navigator: {
        prototype: Navigator
        new(): Navigator
    }
    var Node: {
        prototype: Node
        new(): Node
        readonly ATTRIBUTE_NODE: number
        /**
         * node is a CDATASection node.
         */
        readonly CDATA_SECTION_NODE: number
        /**
         * node is a Comment node.
         */
        readonly COMMENT_NODE: number
        /**
         * node is a DocumentFragment node.
         */
        readonly DOCUMENT_FRAGMENT_NODE: number
        /**
         * node is a document.
         */
        readonly DOCUMENT_NODE: number
        /**
         * Set when other is a descendant of node.
         */
        readonly DOCUMENT_POSITION_CONTAINED_BY: number
        /**
         * Set when other is an ancestor of node.
         */
        readonly DOCUMENT_POSITION_CONTAINS: number
        /**
         * Set when node and other are not in the same tree.
         */
        readonly DOCUMENT_POSITION_DISCONNECTED: number
        /**
         * Set when other is following node.
         */
        readonly DOCUMENT_POSITION_FOLLOWING: number
        readonly DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: number
        /**
         * Set when other is preceding node.
         */
        readonly DOCUMENT_POSITION_PRECEDING: number
        /**
         * node is a doctype.
         */
        readonly DOCUMENT_TYPE_NODE: number
        /**
         * node is an element.
         */
        readonly ELEMENT_NODE: number
        readonly ENTITY_NODE: number
        readonly ENTITY_REFERENCE_NODE: number
        readonly NOTATION_NODE: number
        /**
         * node is a ProcessingInstruction node.
         */
        readonly PROCESSING_INSTRUCTION_NODE: number
        /**
         * node is a Text node.
         */
        readonly TEXT_NODE: number
    }
    var NodeFilter: {
        readonly FILTER_ACCEPT: number
        readonly FILTER_REJECT: number
        readonly FILTER_SKIP: number
        readonly SHOW_ALL: number
        readonly SHOW_ATTRIBUTE: number
        readonly SHOW_CDATA_SECTION: number
        readonly SHOW_COMMENT: number
        readonly SHOW_DOCUMENT: number
        readonly SHOW_DOCUMENT_FRAGMENT: number
        readonly SHOW_DOCUMENT_TYPE: number
        readonly SHOW_ELEMENT: number
        readonly SHOW_ENTITY: number
        readonly SHOW_ENTITY_REFERENCE: number
        readonly SHOW_NOTATION: number
        readonly SHOW_PROCESSING_INSTRUCTION: number
        readonly SHOW_TEXT: number
    }
    var NodeIterator: {
        prototype: NodeIterator
        new(): NodeIterator
    }
    var NodeList: {
        prototype: NodeList
        new(): NodeList
    }
    var Notification: {
        prototype: Notification
        new(title: string, options?: NotificationOptions): Notification
        readonly maxActions: number
        readonly permission: NotificationPermission
        requestPermission(deprecatedCallback?: NotificationPermissionCallback): Promise<NotificationPermission>
    }
    var OfflineAudioCompletionEvent: {
        prototype: OfflineAudioCompletionEvent
        new(type: string, eventInitDict: OfflineAudioCompletionEventInit): OfflineAudioCompletionEvent
    }
    var OfflineAudioContext: {
        prototype: OfflineAudioContext
        new(contextOptions: OfflineAudioContextOptions): OfflineAudioContext
        new(numberOfChannels: number, length: number, sampleRate: number): OfflineAudioContext
    }
    var OffscreenCanvas: {
        prototype: OffscreenCanvas
        new(width: number, height: number): OffscreenCanvas
    }
    var OffscreenCanvasRenderingContext2D: {
        prototype: OffscreenCanvasRenderingContext2D
        new(): OffscreenCanvasRenderingContext2D
    }
    var OscillatorNode: {
        prototype: OscillatorNode
        new(context: BaseAudioContext, options?: OscillatorOptions): OscillatorNode
    }
    var OverconstrainedError: {
        prototype: OverconstrainedError
        new(): OverconstrainedError
    }
    var OverflowEvent: {
        prototype: OverflowEvent
        new(): OverflowEvent
        readonly BOTH: number
        readonly HORIZONTAL: number
        readonly VERTICAL: number
    }
    var PageTransitionEvent: {
        prototype: PageTransitionEvent
        new(type: string, eventInitDict?: PageTransitionEventInit): PageTransitionEvent
    }
    var PannerNode: {
        prototype: PannerNode
        new(context: BaseAudioContext, options?: PannerOptions): PannerNode
    }
    var Path2D: {
        prototype: Path2D
        new(path?: Path2D | string): Path2D
    }
    var PaymentAddress: {
        prototype: PaymentAddress
        new(): PaymentAddress
    }
    var PaymentRequest: {
        prototype: PaymentRequest
        new(methodData: PaymentMethodData[], details: PaymentDetailsInit, options?: PaymentOptions): PaymentRequest
    }
    var PaymentRequestUpdateEvent: {
        prototype: PaymentRequestUpdateEvent
        new(type: string, eventInitDict?: PaymentRequestUpdateEventInit): PaymentRequestUpdateEvent
    }
    var PaymentResponse: {
        prototype: PaymentResponse
        new(): PaymentResponse
    }
    var PerfWidgetExternal: {
        prototype: PerfWidgetExternal
        new(): PerfWidgetExternal
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
    var PerformanceNavigation: {
        prototype: PerformanceNavigation
        new(): PerformanceNavigation
        readonly TYPE_BACK_FORWARD: number
        readonly TYPE_NAVIGATE: number
        readonly TYPE_RELOAD: number
        readonly TYPE_RESERVED: number
    }
    var PerformanceNavigationTiming: {
        prototype: PerformanceNavigationTiming
        new(): PerformanceNavigationTiming
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
    var PerformanceTiming: {
        prototype: PerformanceTiming
        new(): PerformanceTiming
    }
    var PeriodicWave: {
        prototype: PeriodicWave
        new(context: BaseAudioContext, options?: PeriodicWaveOptions): PeriodicWave
    }
    var PermissionRequest: {
        prototype: PermissionRequest
        new(): PermissionRequest
    }
    var PermissionRequestedEvent: {
        prototype: PermissionRequestedEvent
        new(): PermissionRequestedEvent
    }
    var PermissionStatus: {
        prototype: PermissionStatus
        new(): PermissionStatus
    }
    var Permissions: {
        prototype: Permissions
        new(): Permissions
    }
    var Plugin: {
        prototype: Plugin
        new(): Plugin
    }
    var PluginArray: {
        prototype: PluginArray
        new(): PluginArray
    }
    var PointerEvent: {
        prototype: PointerEvent
        new(type: string, eventInitDict?: PointerEventInit): PointerEvent
    }
    var PopStateEvent: {
        prototype: PopStateEvent
        new(type: string, eventInitDict?: PopStateEventInit): PopStateEvent
    }
    var ProcessingInstruction: {
        prototype: ProcessingInstruction
        new(): ProcessingInstruction
    }
    var ProgressEvent: {
        prototype: ProgressEvent
        new(type: string, eventInitDict?: ProgressEventInit): ProgressEvent
    }
    var PromiseRejectionEvent: {
        prototype: PromiseRejectionEvent
        new(type: string, eventInitDict: PromiseRejectionEventInit): PromiseRejectionEvent
    }
    var PublicKeyCredential: {
        prototype: PublicKeyCredential
        new(): PublicKeyCredential
        isUserVerifyingPlatformAuthenticatorAvailable(): Promise<boolean>
    }
    var PushManager: {
        prototype: PushManager
        new(): PushManager
        readonly supportedContentEncodings: ReadonlyArray<string>
    }
    var PushSubscription: {
        prototype: PushSubscription
        new(): PushSubscription
    }
    var PushSubscriptionOptions: {
        prototype: PushSubscriptionOptions
        new(): PushSubscriptionOptions
    }
    var RTCCertificate: {
        prototype: RTCCertificate
        new(): RTCCertificate
        getSupportedAlgorithms(): AlgorithmIdentifier[]
    }
    var RTCDTMFSender: {
        prototype: RTCDTMFSender
        new(): RTCDTMFSender
    }
    var RTCDTMFToneChangeEvent: {
        prototype: RTCDTMFToneChangeEvent
        new(type: string, eventInitDict: RTCDTMFToneChangeEventInit): RTCDTMFToneChangeEvent
    }
    var RTCDataChannel: {
        prototype: RTCDataChannel
        new(): RTCDataChannel
    }
    var RTCDataChannelEvent: {
        prototype: RTCDataChannelEvent
        new(type: string, eventInitDict: RTCDataChannelEventInit): RTCDataChannelEvent
    }
    var RTCDtlsTransport: {
        prototype: RTCDtlsTransport
        new(): RTCDtlsTransport
    }
    var RTCDtlsTransportStateChangedEvent: {
        prototype: RTCDtlsTransportStateChangedEvent
        new(): RTCDtlsTransportStateChangedEvent
    }
    var RTCDtmfSender: {
        prototype: RTCDtmfSender
        new(sender: RTCRtpSender): RTCDtmfSender
    }
    var RTCError: {
        prototype: RTCError
        new(init: RTCErrorInit, message?: string): RTCError
    }
    var RTCErrorEvent: {
        prototype: RTCErrorEvent
        new(type: string, eventInitDict: RTCErrorEventInit): RTCErrorEvent
    }
    var RTCIceCandidate: {
        prototype: RTCIceCandidate
        new(candidateInitDict?: RTCIceCandidateInit): RTCIceCandidate
    }
    var RTCIceCandidatePairChangedEvent: {
        prototype: RTCIceCandidatePairChangedEvent
        new(): RTCIceCandidatePairChangedEvent
    }
    var RTCIceGatherer: {
        prototype: RTCIceGatherer
        new(options: RTCIceGatherOptions): RTCIceGatherer
    }
    var RTCIceGathererEvent: {
        prototype: RTCIceGathererEvent
        new(): RTCIceGathererEvent
    }
    var RTCIceTransport: {
        prototype: RTCIceTransport
        new(): RTCIceTransport
    }
    var RTCIceTransportStateChangedEvent: {
        prototype: RTCIceTransportStateChangedEvent
        new(): RTCIceTransportStateChangedEvent
    }
    var RTCIdentityAssertion: {
        prototype: RTCIdentityAssertion
        new(idp: string, name: string): RTCIdentityAssertion
    }
    var RTCPeerConnection: {
        prototype: RTCPeerConnection
        new(configuration?: RTCConfiguration): RTCPeerConnection
        generateCertificate(keygenAlgorithm: AlgorithmIdentifier): Promise<RTCCertificate>
        getDefaultIceServers(): RTCIceServer[]
    }
    var RTCPeerConnectionIceErrorEvent: {
        prototype: RTCPeerConnectionIceErrorEvent
        new(type: string, eventInitDict: RTCPeerConnectionIceErrorEventInit): RTCPeerConnectionIceErrorEvent
    }
    var RTCPeerConnectionIceEvent: {
        prototype: RTCPeerConnectionIceEvent
        new(type: string, eventInitDict?: RTCPeerConnectionIceEventInit): RTCPeerConnectionIceEvent
    }
    var RTCRtpReceiver: {
        prototype: RTCRtpReceiver
        new(): RTCRtpReceiver
        getCapabilities(kind: string): RTCRtpCapabilities | null
    }
    var RTCRtpSender: {
        prototype: RTCRtpSender
        new(): RTCRtpSender
        getCapabilities(kind: string): RTCRtpCapabilities | null
    }
    var RTCRtpTransceiver: {
        prototype: RTCRtpTransceiver
        new(): RTCRtpTransceiver
    }
    var RTCSctpTransport: {
        prototype: RTCSctpTransport
        new(): RTCSctpTransport
    }
    var RTCSessionDescription: {
        prototype: RTCSessionDescription
        new(descriptionInitDict?: RTCSessionDescriptionInit): RTCSessionDescription
    }
    var RTCSrtpSdesTransport: {
        prototype: RTCSrtpSdesTransport
        new(transport: RTCIceTransport, encryptParameters: RTCSrtpSdesParameters, decryptParameters: RTCSrtpSdesParameters): RTCSrtpSdesTransport
        getLocalParameters(): RTCSrtpSdesParameters[]
    }
    var RTCSsrcConflictEvent: {
        prototype: RTCSsrcConflictEvent
        new(): RTCSsrcConflictEvent
    }
    var RTCStatsEvent: {
        prototype: RTCStatsEvent
        new(type: string, eventInitDict: RTCStatsEventInit): RTCStatsEvent
    }
    var RTCStatsProvider: {
        prototype: RTCStatsProvider
        new(): RTCStatsProvider
    }
    var RTCStatsReport: {
        prototype: RTCStatsReport
        new(): RTCStatsReport
    }
    var RTCTrackEvent: {
        prototype: RTCTrackEvent
        new(type: string, eventInitDict: RTCTrackEventInit): RTCTrackEvent
    }
    var RadioNodeList: {
        prototype: RadioNodeList
        new(): RadioNodeList
    }
    var RandomSource: {
        prototype: RandomSource
        new(): RandomSource
    }
    var Range: {
        prototype: Range
        new(): Range
        readonly END_TO_END: number
        readonly END_TO_START: number
        readonly START_TO_END: number
        readonly START_TO_START: number
        toString(): string
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
    var SVGAElement: {
        prototype: SVGAElement
        new(): SVGAElement
    }
    var SVGAngle: {
        prototype: SVGAngle
        new(): SVGAngle
        readonly SVG_ANGLETYPE_DEG: number
        readonly SVG_ANGLETYPE_GRAD: number
        readonly SVG_ANGLETYPE_RAD: number
        readonly SVG_ANGLETYPE_UNKNOWN: number
        readonly SVG_ANGLETYPE_UNSPECIFIED: number
    }
    var SVGAnimateElement: {
        prototype: SVGAnimateElement
        new(): SVGAnimateElement
    }
    var SVGAnimateMotionElement: {
        prototype: SVGAnimateMotionElement
        new(): SVGAnimateMotionElement
    }
    var SVGAnimateTransformElement: {
        prototype: SVGAnimateTransformElement
        new(): SVGAnimateTransformElement
    }
    var SVGAnimatedAngle: {
        prototype: SVGAnimatedAngle
        new(): SVGAnimatedAngle
    }
    var SVGAnimatedBoolean: {
        prototype: SVGAnimatedBoolean
        new(): SVGAnimatedBoolean
    }
    var SVGAnimatedEnumeration: {
        prototype: SVGAnimatedEnumeration
        new(): SVGAnimatedEnumeration
    }
    var SVGAnimatedInteger: {
        prototype: SVGAnimatedInteger
        new(): SVGAnimatedInteger
    }
    var SVGAnimatedLength: {
        prototype: SVGAnimatedLength
        new(): SVGAnimatedLength
    }
    var SVGAnimatedLengthList: {
        prototype: SVGAnimatedLengthList
        new(): SVGAnimatedLengthList
    }
    var SVGAnimatedNumber: {
        prototype: SVGAnimatedNumber
        new(): SVGAnimatedNumber
    }
    var SVGAnimatedNumberList: {
        prototype: SVGAnimatedNumberList
        new(): SVGAnimatedNumberList
    }
    var SVGAnimatedPreserveAspectRatio: {
        prototype: SVGAnimatedPreserveAspectRatio
        new(): SVGAnimatedPreserveAspectRatio
    }
    var SVGAnimatedRect: {
        prototype: SVGAnimatedRect
        new(): SVGAnimatedRect
    }
    var SVGAnimatedString: {
        prototype: SVGAnimatedString
        new(): SVGAnimatedString
    }
    var SVGAnimatedTransformList: {
        prototype: SVGAnimatedTransformList
        new(): SVGAnimatedTransformList
    }
    var SVGAnimationElement: {
        prototype: SVGAnimationElement
        new(): SVGAnimationElement
    }
    var SVGCircleElement: {
        prototype: SVGCircleElement
        new(): SVGCircleElement
    }
    var SVGClipPathElement: {
        prototype: SVGClipPathElement
        new(): SVGClipPathElement
    }
    var SVGComponentTransferFunctionElement: {
        prototype: SVGComponentTransferFunctionElement
        new(): SVGComponentTransferFunctionElement
        readonly SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: number
        readonly SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: number
        readonly SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: number
        readonly SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: number
        readonly SVG_FECOMPONENTTRANSFER_TYPE_TABLE: number
        readonly SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: number
    }
    var SVGCursorElement: {
        prototype: SVGCursorElement
        new(): SVGCursorElement
    }
    var SVGDefsElement: {
        prototype: SVGDefsElement
        new(): SVGDefsElement
    }
    var SVGDescElement: {
        prototype: SVGDescElement
        new(): SVGDescElement
    }
    var SVGElement: {
        prototype: SVGElement
        new(): SVGElement
    }
    var SVGElementInstance: {
        prototype: SVGElementInstance
        new(): SVGElementInstance
    }
    var SVGElementInstanceList: {
        prototype: SVGElementInstanceList
        new(): SVGElementInstanceList
    }
    var SVGEllipseElement: {
        prototype: SVGEllipseElement
        new(): SVGEllipseElement
    }
    var SVGFEBlendElement: {
        prototype: SVGFEBlendElement
        new(): SVGFEBlendElement
        readonly SVG_FEBLEND_MODE_COLOR: number
        readonly SVG_FEBLEND_MODE_COLOR_BURN: number
        readonly SVG_FEBLEND_MODE_COLOR_DODGE: number
        readonly SVG_FEBLEND_MODE_DARKEN: number
        readonly SVG_FEBLEND_MODE_DIFFERENCE: number
        readonly SVG_FEBLEND_MODE_EXCLUSION: number
        readonly SVG_FEBLEND_MODE_HARD_LIGHT: number
        readonly SVG_FEBLEND_MODE_HUE: number
        readonly SVG_FEBLEND_MODE_LIGHTEN: number
        readonly SVG_FEBLEND_MODE_LUMINOSITY: number
        readonly SVG_FEBLEND_MODE_MULTIPLY: number
        readonly SVG_FEBLEND_MODE_NORMAL: number
        readonly SVG_FEBLEND_MODE_OVERLAY: number
        readonly SVG_FEBLEND_MODE_SATURATION: number
        readonly SVG_FEBLEND_MODE_SCREEN: number
        readonly SVG_FEBLEND_MODE_SOFT_LIGHT: number
        readonly SVG_FEBLEND_MODE_UNKNOWN: number
    }
    var SVGFEColorMatrixElement: {
        prototype: SVGFEColorMatrixElement
        new(): SVGFEColorMatrixElement
        readonly SVG_FECOLORMATRIX_TYPE_HUEROTATE: number
        readonly SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: number
        readonly SVG_FECOLORMATRIX_TYPE_MATRIX: number
        readonly SVG_FECOLORMATRIX_TYPE_SATURATE: number
        readonly SVG_FECOLORMATRIX_TYPE_UNKNOWN: number
    }
    var SVGFEComponentTransferElement: {
        prototype: SVGFEComponentTransferElement
        new(): SVGFEComponentTransferElement
    }
    var SVGFECompositeElement: {
        prototype: SVGFECompositeElement
        new(): SVGFECompositeElement
        readonly SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: number
        readonly SVG_FECOMPOSITE_OPERATOR_ATOP: number
        readonly SVG_FECOMPOSITE_OPERATOR_IN: number
        readonly SVG_FECOMPOSITE_OPERATOR_OUT: number
        readonly SVG_FECOMPOSITE_OPERATOR_OVER: number
        readonly SVG_FECOMPOSITE_OPERATOR_UNKNOWN: number
        readonly SVG_FECOMPOSITE_OPERATOR_XOR: number
    }
    var SVGFEConvolveMatrixElement: {
        prototype: SVGFEConvolveMatrixElement
        new(): SVGFEConvolveMatrixElement
        readonly SVG_EDGEMODE_DUPLICATE: number
        readonly SVG_EDGEMODE_NONE: number
        readonly SVG_EDGEMODE_UNKNOWN: number
        readonly SVG_EDGEMODE_WRAP: number
    }
    var SVGFEDiffuseLightingElement: {
        prototype: SVGFEDiffuseLightingElement
        new(): SVGFEDiffuseLightingElement
    }
    var SVGFEDisplacementMapElement: {
        prototype: SVGFEDisplacementMapElement
        new(): SVGFEDisplacementMapElement
        readonly SVG_CHANNEL_A: number
        readonly SVG_CHANNEL_B: number
        readonly SVG_CHANNEL_G: number
        readonly SVG_CHANNEL_R: number
        readonly SVG_CHANNEL_UNKNOWN: number
    }
    var SVGFEDistantLightElement: {
        prototype: SVGFEDistantLightElement
        new(): SVGFEDistantLightElement
    }
    var SVGFEDropShadowElement: {
        prototype: SVGFEDropShadowElement
        new(): SVGFEDropShadowElement
    }
    var SVGFEFloodElement: {
        prototype: SVGFEFloodElement
        new(): SVGFEFloodElement
    }
    var SVGFEFuncAElement: {
        prototype: SVGFEFuncAElement
        new(): SVGFEFuncAElement
    }
    var SVGFEFuncBElement: {
        prototype: SVGFEFuncBElement
        new(): SVGFEFuncBElement
    }
    var SVGFEFuncGElement: {
        prototype: SVGFEFuncGElement
        new(): SVGFEFuncGElement
    }
    var SVGFEFuncRElement: {
        prototype: SVGFEFuncRElement
        new(): SVGFEFuncRElement
    }
    var SVGFEGaussianBlurElement: {
        prototype: SVGFEGaussianBlurElement
        new(): SVGFEGaussianBlurElement
    }
    var SVGFEImageElement: {
        prototype: SVGFEImageElement
        new(): SVGFEImageElement
    }
    var SVGFEMergeElement: {
        prototype: SVGFEMergeElement
        new(): SVGFEMergeElement
    }
    var SVGFEMergeNodeElement: {
        prototype: SVGFEMergeNodeElement
        new(): SVGFEMergeNodeElement
    }
    var SVGFEMorphologyElement: {
        prototype: SVGFEMorphologyElement
        new(): SVGFEMorphologyElement
        readonly SVG_MORPHOLOGY_OPERATOR_DILATE: number
        readonly SVG_MORPHOLOGY_OPERATOR_ERODE: number
        readonly SVG_MORPHOLOGY_OPERATOR_UNKNOWN: number
    }
    var SVGFEOffsetElement: {
        prototype: SVGFEOffsetElement
        new(): SVGFEOffsetElement
    }
    var SVGFEPointLightElement: {
        prototype: SVGFEPointLightElement
        new(): SVGFEPointLightElement
    }
    var SVGFESpecularLightingElement: {
        prototype: SVGFESpecularLightingElement
        new(): SVGFESpecularLightingElement
    }
    var SVGFESpotLightElement: {
        prototype: SVGFESpotLightElement
        new(): SVGFESpotLightElement
    }
    var SVGFETileElement: {
        prototype: SVGFETileElement
        new(): SVGFETileElement
    }
    var SVGFETurbulenceElement: {
        prototype: SVGFETurbulenceElement
        new(): SVGFETurbulenceElement
        readonly SVG_STITCHTYPE_NOSTITCH: number
        readonly SVG_STITCHTYPE_STITCH: number
        readonly SVG_STITCHTYPE_UNKNOWN: number
        readonly SVG_TURBULENCE_TYPE_FRACTALNOISE: number
        readonly SVG_TURBULENCE_TYPE_TURBULENCE: number
        readonly SVG_TURBULENCE_TYPE_UNKNOWN: number
    }
    var SVGFilterElement: {
        prototype: SVGFilterElement
        new(): SVGFilterElement
    }
    var SVGForeignObjectElement: {
        prototype: SVGForeignObjectElement
        new(): SVGForeignObjectElement
    }
    var SVGGElement: {
        prototype: SVGGElement
        new(): SVGGElement
    }
    var SVGGeometryElement: {
        prototype: SVGGeometryElement
        new(): SVGGeometryElement
    }
    var SVGGradientElement: {
        prototype: SVGGradientElement
        new(): SVGGradientElement
        readonly SVG_SPREADMETHOD_PAD: number
        readonly SVG_SPREADMETHOD_REFLECT: number
        readonly SVG_SPREADMETHOD_REPEAT: number
        readonly SVG_SPREADMETHOD_UNKNOWN: number
    }
    var SVGGraphicsElement: {
        prototype: SVGGraphicsElement
        new(): SVGGraphicsElement
    }
    var SVGImageElement: {
        prototype: SVGImageElement
        new(): SVGImageElement
    }
    var SVGLength: {
        prototype: SVGLength
        new(): SVGLength
        readonly SVG_LENGTHTYPE_CM: number
        readonly SVG_LENGTHTYPE_EMS: number
        readonly SVG_LENGTHTYPE_EXS: number
        readonly SVG_LENGTHTYPE_IN: number
        readonly SVG_LENGTHTYPE_MM: number
        readonly SVG_LENGTHTYPE_NUMBER: number
        readonly SVG_LENGTHTYPE_PC: number
        readonly SVG_LENGTHTYPE_PERCENTAGE: number
        readonly SVG_LENGTHTYPE_PT: number
        readonly SVG_LENGTHTYPE_PX: number
        readonly SVG_LENGTHTYPE_UNKNOWN: number
    }
    var SVGLengthList: {
        prototype: SVGLengthList
        new(): SVGLengthList
    }
    var SVGLineElement: {
        prototype: SVGLineElement
        new(): SVGLineElement
    }
    var SVGLinearGradientElement: {
        prototype: SVGLinearGradientElement
        new(): SVGLinearGradientElement
    }
    var SVGMarkerElement: {
        prototype: SVGMarkerElement
        new(): SVGMarkerElement
        readonly SVG_MARKERUNITS_STROKEWIDTH: number
        readonly SVG_MARKERUNITS_UNKNOWN: number
        readonly SVG_MARKERUNITS_USERSPACEONUSE: number
        readonly SVG_MARKER_ORIENT_ANGLE: number
        readonly SVG_MARKER_ORIENT_AUTO: number
        readonly SVG_MARKER_ORIENT_UNKNOWN: number
    }
    var SVGMaskElement: {
        prototype: SVGMaskElement
        new(): SVGMaskElement
    }
    var SVGMetadataElement: {
        prototype: SVGMetadataElement
        new(): SVGMetadataElement
    }
    var SVGNumber: {
        prototype: SVGNumber
        new(): SVGNumber
    }
    var SVGNumberList: {
        prototype: SVGNumberList
        new(): SVGNumberList
    }
    var SVGPathElement: {
        prototype: SVGPathElement
        new(): SVGPathElement
    }
    var SVGPathSeg: {
        prototype: SVGPathSeg
        new(): SVGPathSeg
        readonly PATHSEG_ARC_ABS: number
        readonly PATHSEG_ARC_REL: number
        readonly PATHSEG_CLOSEPATH: number
        readonly PATHSEG_CURVETO_CUBIC_ABS: number
        readonly PATHSEG_CURVETO_CUBIC_REL: number
        readonly PATHSEG_CURVETO_CUBIC_SMOOTH_ABS: number
        readonly PATHSEG_CURVETO_CUBIC_SMOOTH_REL: number
        readonly PATHSEG_CURVETO_QUADRATIC_ABS: number
        readonly PATHSEG_CURVETO_QUADRATIC_REL: number
        readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_ABS: number
        readonly PATHSEG_CURVETO_QUADRATIC_SMOOTH_REL: number
        readonly PATHSEG_LINETO_ABS: number
        readonly PATHSEG_LINETO_HORIZONTAL_ABS: number
        readonly PATHSEG_LINETO_HORIZONTAL_REL: number
        readonly PATHSEG_LINETO_REL: number
        readonly PATHSEG_LINETO_VERTICAL_ABS: number
        readonly PATHSEG_LINETO_VERTICAL_REL: number
        readonly PATHSEG_MOVETO_ABS: number
        readonly PATHSEG_MOVETO_REL: number
        readonly PATHSEG_UNKNOWN: number
    }
    var SVGPathSegArcAbs: {
        prototype: SVGPathSegArcAbs
        new(): SVGPathSegArcAbs
    }
    var SVGPathSegArcRel: {
        prototype: SVGPathSegArcRel
        new(): SVGPathSegArcRel
    }
    var SVGPathSegClosePath: {
        prototype: SVGPathSegClosePath
        new(): SVGPathSegClosePath
    }
    var SVGPathSegCurvetoCubicAbs: {
        prototype: SVGPathSegCurvetoCubicAbs
        new(): SVGPathSegCurvetoCubicAbs
    }
    var SVGPathSegCurvetoCubicRel: {
        prototype: SVGPathSegCurvetoCubicRel
        new(): SVGPathSegCurvetoCubicRel
    }
    var SVGPathSegCurvetoCubicSmoothAbs: {
        prototype: SVGPathSegCurvetoCubicSmoothAbs
        new(): SVGPathSegCurvetoCubicSmoothAbs
    }
    var SVGPathSegCurvetoCubicSmoothRel: {
        prototype: SVGPathSegCurvetoCubicSmoothRel
        new(): SVGPathSegCurvetoCubicSmoothRel
    }
    var SVGPathSegCurvetoQuadraticAbs: {
        prototype: SVGPathSegCurvetoQuadraticAbs
        new(): SVGPathSegCurvetoQuadraticAbs
    }
    var SVGPathSegCurvetoQuadraticRel: {
        prototype: SVGPathSegCurvetoQuadraticRel
        new(): SVGPathSegCurvetoQuadraticRel
    }
    var SVGPathSegCurvetoQuadraticSmoothAbs: {
        prototype: SVGPathSegCurvetoQuadraticSmoothAbs
        new(): SVGPathSegCurvetoQuadraticSmoothAbs
    }
    var SVGPathSegCurvetoQuadraticSmoothRel: {
        prototype: SVGPathSegCurvetoQuadraticSmoothRel
        new(): SVGPathSegCurvetoQuadraticSmoothRel
    }
    var SVGPathSegLinetoAbs: {
        prototype: SVGPathSegLinetoAbs
        new(): SVGPathSegLinetoAbs
    }
    var SVGPathSegLinetoHorizontalAbs: {
        prototype: SVGPathSegLinetoHorizontalAbs
        new(): SVGPathSegLinetoHorizontalAbs
    }
    var SVGPathSegLinetoHorizontalRel: {
        prototype: SVGPathSegLinetoHorizontalRel
        new(): SVGPathSegLinetoHorizontalRel
    }
    var SVGPathSegLinetoRel: {
        prototype: SVGPathSegLinetoRel
        new(): SVGPathSegLinetoRel
    }
    var SVGPathSegLinetoVerticalAbs: {
        prototype: SVGPathSegLinetoVerticalAbs
        new(): SVGPathSegLinetoVerticalAbs
    }
    var SVGPathSegLinetoVerticalRel: {
        prototype: SVGPathSegLinetoVerticalRel
        new(): SVGPathSegLinetoVerticalRel
    }
    var SVGPathSegList: {
        prototype: SVGPathSegList
        new(): SVGPathSegList
    }
    var SVGPathSegMovetoAbs: {
        prototype: SVGPathSegMovetoAbs
        new(): SVGPathSegMovetoAbs
    }
    var SVGPathSegMovetoRel: {
        prototype: SVGPathSegMovetoRel
        new(): SVGPathSegMovetoRel
    }
    var SVGPatternElement: {
        prototype: SVGPatternElement
        new(): SVGPatternElement
    }
    var SVGPointList: {
        prototype: SVGPointList
        new(): SVGPointList
    }
    var SVGPolygonElement: {
        prototype: SVGPolygonElement
        new(): SVGPolygonElement
    }
    var SVGPolylineElement: {
        prototype: SVGPolylineElement
        new(): SVGPolylineElement
    }
    var SVGPreserveAspectRatio: {
        prototype: SVGPreserveAspectRatio
        new(): SVGPreserveAspectRatio
        readonly SVG_MEETORSLICE_MEET: number
        readonly SVG_MEETORSLICE_SLICE: number
        readonly SVG_MEETORSLICE_UNKNOWN: number
        readonly SVG_PRESERVEASPECTRATIO_NONE: number
        readonly SVG_PRESERVEASPECTRATIO_UNKNOWN: number
        readonly SVG_PRESERVEASPECTRATIO_XMAXYMAX: number
        readonly SVG_PRESERVEASPECTRATIO_XMAXYMID: number
        readonly SVG_PRESERVEASPECTRATIO_XMAXYMIN: number
        readonly SVG_PRESERVEASPECTRATIO_XMIDYMAX: number
        readonly SVG_PRESERVEASPECTRATIO_XMIDYMID: number
        readonly SVG_PRESERVEASPECTRATIO_XMIDYMIN: number
        readonly SVG_PRESERVEASPECTRATIO_XMINYMAX: number
        readonly SVG_PRESERVEASPECTRATIO_XMINYMID: number
        readonly SVG_PRESERVEASPECTRATIO_XMINYMIN: number
    }
    var SVGRadialGradientElement: {
        prototype: SVGRadialGradientElement
        new(): SVGRadialGradientElement
    }
    var SVGRectElement: {
        prototype: SVGRectElement
        new(): SVGRectElement
    }
    var SVGSVGElement: {
        prototype: SVGSVGElement
        new(): SVGSVGElement
        readonly SVG_ZOOMANDPAN_DISABLE: number
        readonly SVG_ZOOMANDPAN_MAGNIFY: number
        readonly SVG_ZOOMANDPAN_UNKNOWN: number
    }
    var SVGScriptElement: {
        prototype: SVGScriptElement
        new(): SVGScriptElement
    }
    var SVGStopElement: {
        prototype: SVGStopElement
        new(): SVGStopElement
    }
    var SVGStringList: {
        prototype: SVGStringList
        new(): SVGStringList
    }
    var SVGStyleElement: {
        prototype: SVGStyleElement
        new(): SVGStyleElement
    }
    var SVGSwitchElement: {
        prototype: SVGSwitchElement
        new(): SVGSwitchElement
    }
    var SVGSymbolElement: {
        prototype: SVGSymbolElement
        new(): SVGSymbolElement
    }
    var SVGTSpanElement: {
        prototype: SVGTSpanElement
        new(): SVGTSpanElement
    }
    var SVGTextContentElement: {
        prototype: SVGTextContentElement
        new(): SVGTextContentElement
        readonly LENGTHADJUST_SPACING: number
        readonly LENGTHADJUST_SPACINGANDGLYPHS: number
        readonly LENGTHADJUST_UNKNOWN: number
    }
    var SVGTextElement: {
        prototype: SVGTextElement
        new(): SVGTextElement
    }
    var SVGTextPathElement: {
        prototype: SVGTextPathElement
        new(): SVGTextPathElement
        readonly TEXTPATH_METHODTYPE_ALIGN: number
        readonly TEXTPATH_METHODTYPE_STRETCH: number
        readonly TEXTPATH_METHODTYPE_UNKNOWN: number
        readonly TEXTPATH_SPACINGTYPE_AUTO: number
        readonly TEXTPATH_SPACINGTYPE_EXACT: number
        readonly TEXTPATH_SPACINGTYPE_UNKNOWN: number
    }
    var SVGTextPositioningElement: {
        prototype: SVGTextPositioningElement
        new(): SVGTextPositioningElement
    }
    var SVGTitleElement: {
        prototype: SVGTitleElement
        new(): SVGTitleElement
    }
    var SVGTransform: {
        prototype: SVGTransform
        new(): SVGTransform
        readonly SVG_TRANSFORM_MATRIX: number
        readonly SVG_TRANSFORM_ROTATE: number
        readonly SVG_TRANSFORM_SCALE: number
        readonly SVG_TRANSFORM_SKEWX: number
        readonly SVG_TRANSFORM_SKEWY: number
        readonly SVG_TRANSFORM_TRANSLATE: number
        readonly SVG_TRANSFORM_UNKNOWN: number
    }
    var SVGTransformList: {
        prototype: SVGTransformList
        new(): SVGTransformList
    }
    var SVGUnitTypes: {
        prototype: SVGUnitTypes
        new(): SVGUnitTypes
        readonly SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: number
        readonly SVG_UNIT_TYPE_UNKNOWN: number
        readonly SVG_UNIT_TYPE_USERSPACEONUSE: number
    }
    var SVGUseElement: {
        prototype: SVGUseElement
        new(): SVGUseElement
    }
    var SVGViewElement: {
        prototype: SVGViewElement
        new(): SVGViewElement
        readonly SVG_ZOOMANDPAN_DISABLE: number
        readonly SVG_ZOOMANDPAN_MAGNIFY: number
        readonly SVG_ZOOMANDPAN_UNKNOWN: number
    }
    var SVGZoomAndPan: {
        readonly SVG_ZOOMANDPAN_DISABLE: number
        readonly SVG_ZOOMANDPAN_MAGNIFY: number
        readonly SVG_ZOOMANDPAN_UNKNOWN: number
    }
    var SVGZoomEvent: {
        prototype: SVGZoomEvent
        new(): SVGZoomEvent
    }
    var ScopedCredential: {
        prototype: ScopedCredential
        new(): ScopedCredential
    }
    var ScopedCredentialInfo: {
        prototype: ScopedCredentialInfo
        new(): ScopedCredentialInfo
    }
    var Screen: {
        prototype: Screen
        new(): Screen
    }
    var ScreenOrientation: {
        prototype: ScreenOrientation
        new(): ScreenOrientation
    }
    var ScriptProcessorNode: {
        prototype: ScriptProcessorNode
        new(): ScriptProcessorNode
    }
    var SecurityPolicyViolationEvent: {
        prototype: SecurityPolicyViolationEvent
        new(type: string, eventInitDict?: SecurityPolicyViolationEventInit): SecurityPolicyViolationEvent
    }
    var Selection: {
        prototype: Selection
        new(): Selection
        toString(): string
    }
    var ServiceUIFrameContext: ServiceUIFrameContext
    var ServiceWorker: {
        prototype: ServiceWorker
        new(): ServiceWorker
    }
    var ServiceWorkerContainer: {
        prototype: ServiceWorkerContainer
        new(): ServiceWorkerContainer
    }
    var ServiceWorkerMessageEvent: {
        prototype: ServiceWorkerMessageEvent
        new(type: string, eventInitDict?: ServiceWorkerMessageEventInit): ServiceWorkerMessageEvent
    }
    var ServiceWorkerRegistration: {
        prototype: ServiceWorkerRegistration
        new(): ServiceWorkerRegistration
    }
    var ShadowRoot: {
        prototype: ShadowRoot
        new(): ShadowRoot
    }
    var SharedWorker: {
        prototype: SharedWorker
        new(scriptURL: string, options?: string | WorkerOptions): SharedWorker
    }
    var SourceBuffer: {
        prototype: SourceBuffer
        new(): SourceBuffer
    }
    var SourceBufferList: {
        prototype: SourceBufferList
        new(): SourceBufferList
    }
    var SpeechGrammar: {
        prototype: SpeechGrammar
        new(): SpeechGrammar
    }
    var SpeechGrammarList: {
        prototype: SpeechGrammarList
        new(): SpeechGrammarList
    }
    var SpeechRecognition: {
        prototype: SpeechRecognition
        new(): SpeechRecognition
    }
    var SpeechRecognitionAlternative: {
        prototype: SpeechRecognitionAlternative
        new(): SpeechRecognitionAlternative
    }
    var SpeechRecognitionEvent: {
        prototype: SpeechRecognitionEvent
        new(): SpeechRecognitionEvent
    }
    var SpeechRecognitionPiece: {
        prototype: SpeechRecognitionPiece
        new(): SpeechRecognitionPiece
    }
    var SpeechRecognitionPieceList: {
        prototype: SpeechRecognitionPieceList
        new(): SpeechRecognitionPieceList
    }
    var SpeechSynthesis: {
        prototype: SpeechSynthesis
        new(): SpeechSynthesis
    }
    var SpeechSynthesisErrorEvent: {
        prototype: SpeechSynthesisErrorEvent
        new(type: string, eventInitDict: SpeechSynthesisErrorEventInit): SpeechSynthesisErrorEvent
    }
    var SpeechSynthesisEvent: {
        prototype: SpeechSynthesisEvent
        new(type: string, eventInitDict: SpeechSynthesisEventInit): SpeechSynthesisEvent
    }
    var SpeechSynthesisUtterance: {
        prototype: SpeechSynthesisUtterance
        new(text?: string): SpeechSynthesisUtterance
    }
    var SpeechSynthesisVoice: {
        prototype: SpeechSynthesisVoice
        new(): SpeechSynthesisVoice
    }
    var StaticRange: {
        prototype: StaticRange
        new(init: StaticRangeInit): StaticRange
    }
    var StereoPannerNode: {
        prototype: StereoPannerNode
        new(context: BaseAudioContext, options?: StereoPannerOptions): StereoPannerNode
    }
    var Storage: {
        prototype: Storage
        new(): Storage
    }
    var StorageEvent: {
        prototype: StorageEvent
        new(type: string, eventInitDict?: StorageEventInit): StorageEvent
    }
    var StorageManager: {
        prototype: StorageManager
        new(): StorageManager
    }
    var StyleMedia: {
        prototype: StyleMedia
        new(): StyleMedia
    }
    var StyleSheet: {
        prototype: StyleSheet
        new(): StyleSheet
    }
    var StyleSheetList: {
        prototype: StyleSheetList
        new(): StyleSheetList
    }
    var SubtleCrypto: {
        prototype: SubtleCrypto
        new(): SubtleCrypto
    }
    var SyncManager: {
        prototype: SyncManager
        new(): SyncManager
    }
    var Text: {
        prototype: Text
        new(data?: string): Text
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
    var TextEvent: {
        prototype: TextEvent
        new(): TextEvent
        readonly DOM_INPUT_METHOD_DROP: number
        readonly DOM_INPUT_METHOD_HANDWRITING: number
        readonly DOM_INPUT_METHOD_IME: number
        readonly DOM_INPUT_METHOD_KEYBOARD: number
        readonly DOM_INPUT_METHOD_MULTIMODAL: number
        readonly DOM_INPUT_METHOD_OPTION: number
        readonly DOM_INPUT_METHOD_PASTE: number
        readonly DOM_INPUT_METHOD_SCRIPT: number
        readonly DOM_INPUT_METHOD_UNKNOWN: number
        readonly DOM_INPUT_METHOD_VOICE: number
    }
    var TextMetrics: {
        prototype: TextMetrics
        new(): TextMetrics
    }
    var TextTrack: {
        prototype: TextTrack
        new(): TextTrack
    }
    var TextTrackCue: {
        prototype: TextTrackCue
        new(): TextTrackCue
    }
    var TextTrackCueList: {
        prototype: TextTrackCueList
        new(): TextTrackCueList
    }
    var TextTrackList: {
        prototype: TextTrackList
        new(): TextTrackList
    }
    var TimeRanges: {
        prototype: TimeRanges
        new(): TimeRanges
    }
    var Touch: {
        prototype: Touch
        new(touchInitDict: TouchInit): Touch
    }
    var TouchEvent: {
        prototype: TouchEvent
        new(type: string, eventInitDict?: TouchEventInit): TouchEvent
    }
    var TouchList: {
        prototype: TouchList
        new(): TouchList
    }
    var TrackEvent: {
        prototype: TrackEvent
        new(type: string, eventInitDict?: TrackEventInit): TrackEvent
    }
    var TransformStream: {
        prototype: TransformStream
        new <I = any, O = any>(transformer?: Transformer<I, O>, writableStrategy?: QueuingStrategy<I>, readableStrategy?: QueuingStrategy<O>): TransformStream<I, O>
    }
    var TransitionEvent: {
        prototype: TransitionEvent
        new(type: string, transitionEventInitDict?: TransitionEventInit): TransitionEvent
    }
    var TreeWalker: {
        prototype: TreeWalker
        new(): TreeWalker
    }
    var UIEvent: {
        prototype: UIEvent
        new(type: string, eventInitDict?: UIEventInit): UIEvent
    }
    var URL: {
        prototype: URL
        new(url: string, base?: string | URL): URL
        createObjectURL(object: any): string
        revokeObjectURL(url: string): void
    }
    var webkitURL: typeof URL
    var URLSearchParams: {
        prototype: URLSearchParams
        new(init?: string[][] | Record<string, string> | string | URLSearchParams): URLSearchParams
        toString(): string
    }
    var VRDisplay: {
        prototype: VRDisplay
        new(): VRDisplay
    }
    var VRDisplayCapabilities: {
        prototype: VRDisplayCapabilities
        new(): VRDisplayCapabilities
    }
    var VRDisplayEvent: {
        prototype: VRDisplayEvent
        new(type: string, eventInitDict: VRDisplayEventInit): VRDisplayEvent
    }
    var VREyeParameters: {
        prototype: VREyeParameters
        new(): VREyeParameters
    }
    var VRFieldOfView: {
        prototype: VRFieldOfView
        new(): VRFieldOfView
    }
    var VRFrameData: {
        prototype: VRFrameData
        new(): VRFrameData
    }
    var VRPose: {
        prototype: VRPose
        new(): VRPose
    }
    var VTTCue: {
        prototype: VTTCue
        new(startTime: number, endTime: number, text: string): VTTCue
    }
    var VTTRegion: {
        prototype: VTTRegion
        new(): VTTRegion
    }
    var ValidityState: {
        prototype: ValidityState
        new(): ValidityState
    }
    var VideoPlaybackQuality: {
        prototype: VideoPlaybackQuality
        new(): VideoPlaybackQuality
    }
    var WaveShaperNode: {
        prototype: WaveShaperNode
        new(context: BaseAudioContext, options?: WaveShaperOptions): WaveShaperNode
    }
    var WebAuthentication: {
        prototype: WebAuthentication
        new(): WebAuthentication
    }
    var WebAuthnAssertion: {
        prototype: WebAuthnAssertion
        new(): WebAuthnAssertion
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
    var WebKitPoint: {
        prototype: WebKitPoint
        new(x?: number, y?: number): WebKitPoint
    }
    var WebSocket: {
        prototype: WebSocket
        new(url: string, protocols?: string | string[]): WebSocket
        readonly CLOSED: number
        readonly CLOSING: number
        readonly CONNECTING: number
        readonly OPEN: number
    }
    var WheelEvent: {
        prototype: WheelEvent
        new(type: string, eventInitDict?: WheelEventInit): WheelEvent
        readonly DOM_DELTA_LINE: number
        readonly DOM_DELTA_PAGE: number
        readonly DOM_DELTA_PIXEL: number
    }
    var Window: {
        prototype: Window
        new(): Window
    }
    var Worker: {
        prototype: Worker
        new(stringUrl: string | URL, options?: WorkerOptions): Worker
    }
    var Worklet: {
        prototype: Worklet
        new(): Worklet
    }
    var WritableStream: {
        prototype: WritableStream
        new <W = any>(underlyingSink?: UnderlyingSink<W>, strategy?: QueuingStrategy<W>): WritableStream<W>
    }
    var XMLDocument: {
        prototype: XMLDocument
        new(): XMLDocument
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
    var XMLSerializer: {
        prototype: XMLSerializer
        new(): XMLSerializer
    }
    var XPathEvaluator: {
        prototype: XPathEvaluator
        new(): XPathEvaluator
    }
    var XPathExpression: {
        prototype: XPathExpression
        new(): XPathExpression
    }
    var XPathPiece: {
        prototype: XPathPiece
        new(): XPathPiece
        readonly ANY_TYPE: number
        readonly ANY_UNORDERED_NODE_TYPE: number
        readonly BOOLEAN_TYPE: number
        readonly FIRST_ORDERED_NODE_TYPE: number
        readonly NUMBER_TYPE: number
        readonly ORDERED_NODE_ITERATOR_TYPE: number
        readonly ORDERED_NODE_SNAPSHOT_TYPE: number
        readonly STRING_TYPE: number
        readonly UNORDERED_NODE_ITERATOR_TYPE: number
        readonly UNORDERED_NODE_SNAPSHOT_TYPE: number
    }
    var XSLTProcessor: {
        prototype: XSLTProcessor
        new(): XSLTProcessor
    }
    var webkitRTCPeerConnection: {
        prototype: webkitRTCPeerConnection
        new(configuration: RTCConfiguration): webkitRTCPeerConnection
    }
    var console: Console
    namespace CSS {
        function escape(ident: string): string
        function supports(property: string, value: string): boolean
        function supports(conditionText: string): boolean
    }
    namespace WebAssembly {
        interface CompileError {
        }

        var CompileError: {
            prototype: CompileError
            new(): CompileError
        }

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

        interface LinkError {
        }

        var LinkError: {
            prototype: LinkError
            new(): LinkError
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

        interface RuntimeError {
        }

        var RuntimeError: {
            prototype: RuntimeError
            new(): RuntimeError
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
    var Audio: {
        new(src?: string): HTMLAudioElement
    }
    var Image: {
        new(width?: number, height?: number): HTMLImageElement
    }
    var Option: {
        new(text?: string, value?: string, defaultSelected?: boolean, selected?: boolean): HTMLOptionElement
    }
    var applicationCache: ApplicationCache
    var clientInformation: Navigator
    var closed: boolean
    var customElements: CustomElementRegistry
    var defaultStatus: string
    var devicePixelRatio: number
    var doNotTrack: string
    var document: Document
    var event: Event | undefined
    var external: External
    var frameElement: Element
    var frames: Window
    var history: History
    var innerHeight: number
    var innerWidth: number
    var length: number
    var location: Location
    var locationbar: BarProp
    var menubar: BarProp
    var msContentScript: ExtensionScriptApis
    const name: never
    var navigator: Navigator
    var offscreenBuffering: string | boolean
    var oncompassneedscalibration: ((this: Window, ev: Event) => any) | null
    var ondevicelight: ((this: Window, ev: DeviceLightEvent) => any) | null
    var ondevicemotion: ((this: Window, ev: DeviceMotionEvent) => any) | null
    var ondeviceorientation: ((this: Window, ev: DeviceOrientationEvent) => any) | null
    var ondeviceorientationabsolute: ((this: Window, ev: DeviceOrientationEvent) => any) | null
    var onmousewheel: ((this: Window, ev: Event) => any) | null
    var onmsgesturechange: ((this: Window, ev: Event) => any) | null
    var onmsgesturedoubletap: ((this: Window, ev: Event) => any) | null
    var onmsgestureend: ((this: Window, ev: Event) => any) | null
    var onmsgesturehold: ((this: Window, ev: Event) => any) | null
    var onmsgesturestart: ((this: Window, ev: Event) => any) | null
    var onmsgesturetap: ((this: Window, ev: Event) => any) | null
    var onmsinertiastart: ((this: Window, ev: Event) => any) | null
    var onmspointercancel: ((this: Window, ev: Event) => any) | null
    var onmspointerdown: ((this: Window, ev: Event) => any) | null
    var onmspointerenter: ((this: Window, ev: Event) => any) | null
    var onmspointerleave: ((this: Window, ev: Event) => any) | null
    var onmspointermove: ((this: Window, ev: Event) => any) | null
    var onmspointerout: ((this: Window, ev: Event) => any) | null
    var onmspointerover: ((this: Window, ev: Event) => any) | null
    var onmspointerup: ((this: Window, ev: Event) => any) | null
    var onorientationchange: ((this: Window, ev: Event) => any) | null
    var onreadystatechange: ((this: Window, ev: ProgressEvent<Window>) => any) | null
    var onvrdisplayactivate: ((this: Window, ev: Event) => any) | null
    var onvrdisplayblur: ((this: Window, ev: Event) => any) | null
    var onvrdisplayconnect: ((this: Window, ev: Event) => any) | null
    var onvrdisplaydeactivate: ((this: Window, ev: Event) => any) | null
    var onvrdisplaydisconnect: ((this: Window, ev: Event) => any) | null
    var onvrdisplayfocus: ((this: Window, ev: Event) => any) | null
    var onvrdisplaypointerrestricted: ((this: Window, ev: Event) => any) | null
    var onvrdisplaypointerunrestricted: ((this: Window, ev: Event) => any) | null
    var onvrdisplaypresentchange: ((this: Window, ev: Event) => any) | null
    var opener: any
    var orientation: string | number
    var outerHeight: number
    var outerWidth: number
    var pageXOffset: number
    var pageYOffset: number
    var parent: Window
    var personalbar: BarProp
    var screen: Screen
    var screenLeft: number
    var screenTop: number
    var screenX: number
    var screenY: number
    var scrollX: number
    var scrollY: number
    var scrollbars: BarProp
    var self: Window & typeof globalThis
    var speechSynthesis: SpeechSynthesis
    var status: string
    var statusbar: BarProp
    var styleMedia: StyleMedia
    var toolbar: BarProp
    var top: Window
    var window: Window & typeof globalThis
    function alert(message?: any): void
    function blur(): void
    function captureEvents(): void
    function close(): void
    function confirm(message?: string): boolean
    function departFocus(navigationReason: NavigationReason, origin: FocusNavigationOrigin): void
    function focus(): void
    function getComputedStyle(elt: Element, pseudoElt?: string | null): CSSStyleDeclaration
    function getMatchedCSSRules(elt: Element, pseudoElt?: string | null): CSSRuleList
    function getSelection(): Selection | null
    function matchMedia(query: string): MediaQueryList
    function moveBy(x: number, y: number): void
    function moveTo(x: number, y: number): void
    function msWriteProfilerMark(profilerMarkName: string): void
    function open(url?: string, target?: string, features?: string, replace?: boolean): Window | null
    function postMessage(message: any, targetOrigin: string, transfer?: Transferable[]): void
    function print(): void
    function prompt(message?: string, _default?: string): string | null
    function releaseEvents(): void
    function resizeBy(x: number, y: number): void
    function resizeTo(x: number, y: number): void
    function scroll(options?: ScrollToOptions): void
    function scroll(x: number, y: number): void
    function scrollBy(options?: ScrollToOptions): void
    function scrollBy(x: number, y: number): void
    function scrollTo(options?: ScrollToOptions): void
    function scrollTo(x: number, y: number): void
    function stop(): void
    function webkitCancelAnimationFrame(handle: number): void
    function webkitConvertPointFromNodeToPage(node: Node, pt: WebKitPoint): WebKitPoint
    function webkitConvertPointFromPageToNode(node: Node, pt: WebKitPoint): WebKitPoint
    function webkitRequestAnimationFrame(callback: FrameRequestCallback): number
    function toString(): string
    function dispatchEvent(event: Event): boolean
    var sessionStorage: Storage
    var localStorage: Storage
    var onabort: ((this: Window, ev: UIEvent) => any) | null
    var onanimationcancel: ((this: Window, ev: AnimationEvent) => any) | null
    var onanimationend: ((this: Window, ev: AnimationEvent) => any) | null
    var onanimationiteration: ((this: Window, ev: AnimationEvent) => any) | null
    var onanimationstart: ((this: Window, ev: AnimationEvent) => any) | null
    var onauxclick: ((this: Window, ev: MouseEvent) => any) | null
    var onblur: ((this: Window, ev: FocusEvent) => any) | null
    var oncancel: ((this: Window, ev: Event) => any) | null
    var oncanplay: ((this: Window, ev: Event) => any) | null
    var oncanplaythrough: ((this: Window, ev: Event) => any) | null
    var onchange: ((this: Window, ev: Event) => any) | null
    var onclick: ((this: Window, ev: MouseEvent) => any) | null
    var onclose: ((this: Window, ev: Event) => any) | null
    var oncontextmenu: ((this: Window, ev: MouseEvent) => any) | null
    var oncuechange: ((this: Window, ev: Event) => any) | null
    var ondblclick: ((this: Window, ev: MouseEvent) => any) | null
    var ondrag: ((this: Window, ev: DragEvent) => any) | null
    var ondragend: ((this: Window, ev: DragEvent) => any) | null
    var ondragenter: ((this: Window, ev: DragEvent) => any) | null
    var ondragexit: ((this: Window, ev: Event) => any) | null
    var ondragleave: ((this: Window, ev: DragEvent) => any) | null
    var ondragover: ((this: Window, ev: DragEvent) => any) | null
    var ondragstart: ((this: Window, ev: DragEvent) => any) | null
    var ondrop: ((this: Window, ev: DragEvent) => any) | null
    var ondurationchange: ((this: Window, ev: Event) => any) | null
    var onemptied: ((this: Window, ev: Event) => any) | null
    var onended: ((this: Window, ev: Event) => any) | null
    var onerror: OnErrorEventHandler
    var onfocus: ((this: Window, ev: FocusEvent) => any) | null
    var ongotpointercapture: ((this: Window, ev: PointerEvent) => any) | null
    var oninput: ((this: Window, ev: Event) => any) | null
    var oninvalid: ((this: Window, ev: Event) => any) | null
    var onkeydown: ((this: Window, ev: KeyboardEvent) => any) | null
    var onkeypress: ((this: Window, ev: KeyboardEvent) => any) | null
    var onkeyup: ((this: Window, ev: KeyboardEvent) => any) | null
    var onload: ((this: Window, ev: Event) => any) | null
    var onloadeddata: ((this: Window, ev: Event) => any) | null
    var onloadedmetadata: ((this: Window, ev: Event) => any) | null
    var onloadstart: ((this: Window, ev: Event) => any) | null
    var onlostpointercapture: ((this: Window, ev: PointerEvent) => any) | null
    var onmousedown: ((this: Window, ev: MouseEvent) => any) | null
    var onmouseenter: ((this: Window, ev: MouseEvent) => any) | null
    var onmouseleave: ((this: Window, ev: MouseEvent) => any) | null
    var onmousemove: ((this: Window, ev: MouseEvent) => any) | null
    var onmouseout: ((this: Window, ev: MouseEvent) => any) | null
    var onmouseover: ((this: Window, ev: MouseEvent) => any) | null
    var onmouseup: ((this: Window, ev: MouseEvent) => any) | null
    var onpause: ((this: Window, ev: Event) => any) | null
    var onplay: ((this: Window, ev: Event) => any) | null
    var onplaying: ((this: Window, ev: Event) => any) | null
    var onpointercancel: ((this: Window, ev: PointerEvent) => any) | null
    var onpointerdown: ((this: Window, ev: PointerEvent) => any) | null
    var onpointerenter: ((this: Window, ev: PointerEvent) => any) | null
    var onpointerleave: ((this: Window, ev: PointerEvent) => any) | null
    var onpointermove: ((this: Window, ev: PointerEvent) => any) | null
    var onpointerout: ((this: Window, ev: PointerEvent) => any) | null
    var onpointerover: ((this: Window, ev: PointerEvent) => any) | null
    var onpointerup: ((this: Window, ev: PointerEvent) => any) | null
    var onprogress: ((this: Window, ev: ProgressEvent) => any) | null
    var onratechange: ((this: Window, ev: Event) => any) | null
    var onreset: ((this: Window, ev: Event) => any) | null
    var onresize: ((this: Window, ev: UIEvent) => any) | null
    var onscroll: ((this: Window, ev: Event) => any) | null
    var onsecuritypolicyviolation: ((this: Window, ev: SecurityPolicyViolationEvent) => any) | null
    var onseeked: ((this: Window, ev: Event) => any) | null
    var onseeking: ((this: Window, ev: Event) => any) | null
    var onselect: ((this: Window, ev: Event) => any) | null
    var onselectionchange: ((this: Window, ev: Event) => any) | null
    var onselectstart: ((this: Window, ev: Event) => any) | null
    var onstalled: ((this: Window, ev: Event) => any) | null
    var onsubmit: ((this: Window, ev: Event) => any) | null
    var onsuspend: ((this: Window, ev: Event) => any) | null
    var ontimeupdate: ((this: Window, ev: Event) => any) | null
    var ontoggle: ((this: Window, ev: Event) => any) | null
    var ontouchcancel: ((this: Window, ev: TouchEvent) => any) | null | undefined
    var ontouchend: ((this: Window, ev: TouchEvent) => any) | null | undefined
    var ontouchmove: ((this: Window, ev: TouchEvent) => any) | null | undefined
    var ontouchstart: ((this: Window, ev: TouchEvent) => any) | null | undefined
    var ontransitioncancel: ((this: Window, ev: TransitionEvent) => any) | null
    var ontransitionend: ((this: Window, ev: TransitionEvent) => any) | null
    var ontransitionrun: ((this: Window, ev: TransitionEvent) => any) | null
    var ontransitionstart: ((this: Window, ev: TransitionEvent) => any) | null
    var onvolumechange: ((this: Window, ev: Event) => any) | null
    var onwaiting: ((this: Window, ev: Event) => any) | null
    var onwheel: ((this: Window, ev: WheelEvent) => any) | null
    function cancelAnimationFrame(handle: number): void
    function requestAnimationFrame(callback: FrameRequestCallback): number
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
    var onafterprint: ((this: Window, ev: Event) => any) | null
    var onbeforeprint: ((this: Window, ev: Event) => any) | null
    var onbeforeunload: ((this: Window, ev: BeforeUnloadEvent) => any) | null
    var onhashchange: ((this: Window, ev: HashChangeEvent) => any) | null
    var onlanguagechange: ((this: Window, ev: Event) => any) | null
    var onmessage: ((this: Window, ev: MessageEvent) => any) | null
    var onmessageerror: ((this: Window, ev: MessageEvent) => any) | null
    var onoffline: ((this: Window, ev: Event) => any) | null
    var ononline: ((this: Window, ev: Event) => any) | null
    var onpagehide: ((this: Window, ev: PageTransitionEvent) => any) | null
    var onpageshow: ((this: Window, ev: PageTransitionEvent) => any) | null
    var onpopstate: ((this: Window, ev: PopStateEvent) => any) | null
    var onrejectionhandled: ((this: Window, ev: PromiseRejectionEvent) => any) | null
    var onstorage: ((this: Window, ev: StorageEvent) => any) | null
    var onunhandledrejection: ((this: Window, ev: PromiseRejectionEvent) => any) | null
    var onunload: ((this: Window, ev: Event) => any) | null
    function addEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void
    function addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void
    function removeEventListener<K extends keyof WindowEventMap>(type: K, listener: (this: Window, ev: WindowEventMap[K]) => any, options?: boolean | EventListenerOptions): void
    function removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void
}
declare const self: typeof window
